import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";
import * as GraphQLTypes from '../GraphQLTypes';
import { Topvisor as TopvisorModel } from "../models/topvisor";
import { extractDomain } from "../utils";
import { Bitrix } from "./bitrix24";
import punycode from "punycode";


interface ITopvisorPositionsParams {
  bitrixGroupId: string;
  projectId: string;
  regionIndexes: number[];
  date1?: string;
  date2?: string;
}

type TKeywordResponse = {
  name: string,
  positionsData: {
    [key: string]: { "position": string }
  }
}

type TProjectResponse = {
  result: GraphQLTypes.Project[]
}

class TopvisorApi extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = 'https://api.topvisor.com/v2/json';
  }

  async getProject(
    bitrixGroupId: GraphQLTypes.WorkGroup["ID"]
  ): Promise<GraphQLTypes.Project> {
    await this.checkGroupPermissions(bitrixGroupId);
    const projectId = await this.getProjectId(bitrixGroupId)
    const response = await this.post<TProjectResponse>('get/projects_2/projects', {
      filters: [{
        name: 'id',
        operator: 'EQUALS',
        values: [projectId]
      }],
      show_searchers_and_regions: 1
    });
    if (!response.result || !response.result.length) {
      throw new Error('Проект не найден');
    }
    return response.result[0]
  };

  async getPositions(
    params: ITopvisorPositionsParams
  ): Promise<GraphQLTypes.PositionResponse> {
    const {
      bitrixGroupId,
      projectId,
      regionIndexes,
      date1,
      date2
    } = params;
    await this.checkGroupPermissions(bitrixGroupId);
    if (!await this.accessToProject(
      projectId,
      bitrixGroupId
    )) throw new Error('Доступ запрещён');
    let response;
    try {
      response = await this.post('get/positions_2/history', {
        project_id: projectId,
        regions_indexes: regionIndexes,
        date1,
        date2,
      });
    } catch (e) {
      throw new Error(`Ошибка при запросе позиций: ${e.message}`)
    }
    return {
      result: {
        keywords: response.result.keywords.map((keyword: TKeywordResponse) => {
          return {
            name: keyword.name,
            positionsData: keyword.positionsData
              && Object.keys(keyword.positionsData).map(p => {
                const [data, _, regionIndex] = p.split(':');
                return {
                  data,
                  regionIndex,
                  position: keyword.positionsData[p].position
                }
            })
          }
        })
      }
    }
  }

  private async getProjectId(
    bitrixGroupId: GraphQLTypes.WorkGroup["ID"]
  ): Promise<string> {
    let projectId: string;
    try {
      const project = await TopvisorModel.findOne({
        bitrixGroupId
      });
      projectId = project.projectId.toString();
    } catch {
      const bitrixGroup = await Bitrix.getGroupByToken(
        bitrixGroupId,
        this.context.user.accessToken,
      );
      if (!bitrixGroup) throw new Error('Группа не найдена или доступ запрещён');
      const project = await this.getProjectByDomain(bitrixGroup.NAME);
      projectId = project.id
      const topvisor = await new TopvisorModel({
        projectId,
        bitrixGroupId,
      });
      try {
        await topvisor.save()
      } catch (e) {
        // 11000 - duplicate key error. fk async
        if (e.code !== 11000) throw new Error(e)
      }
    }
    return projectId;
  }

  private async getProjectByDomain(
    domainString: string
  ): Promise<GraphQLTypes.Project> {
    const domain = extractDomain(domainString);
    if (!domain) throw new Error('Имя группы не является доменным именем');
    const response = await this.post('get/projects_2/projects', {
      filters: [{
        name: 'site',
        operator: 'EQUALS',
        values: [punycode.toASCII(domain)]
      }]
    });
    if (!response.result || !response.result.length) {
      throw new Error('Проект не найден');
    }
    return response.result[0]
  }

  private async accessToProject(
    projectId: string,
    bitrixGroupId: string,
  ): Promise<boolean> {
    return projectId === await this.getProjectId(bitrixGroupId);
  }

  private async checkGroupPermissions(
    bitrixGroupId: GraphQLTypes.WorkGroup['ID']
  ): Promise<void> {
    if (!await Bitrix.getUserAccess(
      bitrixGroupId,
      this.context.user.accessToken
    )) throw new Error('Доступ запрещён');
  }

  willSendRequest(request: RequestOptions): void {
    request.headers.set(
      'Content-Type',
      'application/json'
    );
    request.headers.set(
      'Authorization',
      `bearer ${process.env.TOPVISOR_TOKEN}`,
    );
    request.headers.set(
      'User-Id',
      process.env.TOPVISOR_USER
    )
  }
}

export const Topvisor = new TopvisorApi();
