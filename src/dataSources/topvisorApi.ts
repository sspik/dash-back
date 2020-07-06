import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";
import * as GraphQLTypes from '../GraphQLTypes';
import { Topvisor as TopvisorModel } from "../models/topvisor";
import { extractDomain } from "../utils";
import { Bitrix } from "./bitrix24";
import punycode from "punycode";

class TopvisorApi extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = 'https://api.topvisor.com/v2/json';
  }

  async getProject(
    bitrixGroupId: GraphQLTypes.WorkGroup["ID"]
  ): Promise<GraphQLTypes.Project> {
    const projectId = await this.getProjectId(bitrixGroupId)
    const response = await this.post('get/projects_2/projects', {
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
