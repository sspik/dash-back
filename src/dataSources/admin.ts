import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";
import * as GraphQLTypes from "../GraphQLTypes";

class AdminApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${process.env.BACKEND_URL}/admin`
  }
  async getAdminData(): Promise<GraphQLTypes.AdminResponse>{
    const responses = {
      user: await this.get<GraphQLTypes.AdminUser[]>('users'),
      yandexMetrika: await this.get<GraphQLTypes.AdminYandexMetrika[]>('yandex-metrika'),
      topvisor: await this.get<GraphQLTypes.AdminTopvisor[]>('topvisor')
    }
    return {
      result: responses
    };
  }

  async deleteUser(id: string) {
    try {
      await this.delete(`users/${id}`)
      return true
    } catch (e) {
      throw e
    }
  }

  async willSendRequest(request: RequestOptions): Promise<void> {
    this.clearCache();
    if (this.context.user){
      request.headers.set(
        'cookie',
        `token=${this.context.user.generateAuthToken()}` // Вроде не затратно
      )
    }
  }

  private clearCache(){
    return this.memoizedResults.clear();
  }
}
export const Admin =  new AdminApi();