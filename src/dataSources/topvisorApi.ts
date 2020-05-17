import {RequestOptions, RESTDataSource} from "apollo-datasource-rest";
import * as GraphQLTypes from '../GraphQLTypes';
import punycode from "punycode";


export class TopvisorError extends Error {}

export class TopvisorApi extends RESTDataSource {

  private error = new TopvisorError('Проект не найден');

  constructor() {
    super();
    this.baseURL = 'https://api.topvisor.com/v2/json';
  }

  async getProjectById(
    projectId: number
  ): Promise<GraphQLTypes.Project> {
    console.log(this.context.user.topvisor.length)
    const response = await this.post('get/projects_2/projects', {
      filters: [{
        name: 'id',
        operator: 'EQUALS',
        values: [projectId]
      }],
      show_searchers_and_regions: 1
    });
    if (!response.result || !response.result.length) {
      throw this.error;
    }
    return response.result[0]
  }

  async getProjectByUrl(
    projectUrl: string
  ): Promise<GraphQLTypes.Project> {
    const response = await this.post('get/projects_2/projects', {
      filters: [{
        name: 'site',
        operator: 'EQUALS',
        values: [punycode.toASCII(projectUrl)]
      }]
    });
    if (!response.result || !response.result.length) {
      throw this.error;
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
