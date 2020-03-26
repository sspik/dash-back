import {RequestOptions, RESTDataSource} from "apollo-datasource-rest";
import * as GraphQLTypes from '../GraphQLTypes';

interface IBitrixResponse {
  result?: Array<any>
  error?: string
  error_description?: string
}

export class BitrixAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.BITRIX24_API_ENDPOINT;
  }

  // Queries
  async profile(): Promise<GraphQLTypes.Profile> {
    const response = await this.get('profile');
    return response.result;
  }
  async userGroups(): Promise<Array<GraphQLTypes.WorkGroup>>{
    return await this.returnArray(this.get('sonet_group.user.groups'));
  }
  async getGroupById(groupId: string): Promise<GraphQLTypes.WorkGroup>{
    const response = await this.get(
      'sonet_group.get',
      { 'FILTER[ID]': groupId }
    );
    return response.result[0]
  }
  async getUserById(userId: string): Promise<GraphQLTypes.User> {
    const response = await this.get('user.get', {
      'ID': userId
    });
    return response.result[0];
  }
  async getUserByIds(ids: Array<string>): Promise<Array<Promise<GraphQLTypes.User>>> {
    return ids.map(async userId => {
      return await this.getUserById(userId)
    });
  }
  async getGroupsUsers(groupId: string): Promise<Array<Promise<GraphQLTypes.User>>> {
    const usersId = await this.returnArray(
      this.get('sonet_group.user.get',{
        'ID': groupId
      })
    );
    return await this.getUserByIds(usersId.map(u => u["USER_ID"]))
  }
  async getGroupsTasks(groupId: string): Promise<Array<Promise<GraphQLTypes.Task>>> {
    return this.returnArray(this.get('task.item.list', {
      '0[DEADLINE]': 'desc',
      '1[GROUP_ID][0]': groupId
    }))
  }
  async getTaskComments(
    taskID: string
  ): Promise<Array<Promise<GraphQLTypes.TaskComment>>> {
    return this.returnArray(this.get('task.commentitem.getlist.json', {
      TASKID: taskID
    }))
  }

  // Mutations
  async sendTaskMessage(
    taskId: string,
    message: string
  ): Promise<GraphQLTypes.SendTaskMessageResponse> {
    return await this.get('task.commentitem.add.json', {
      '0': taskId,
      '1[POST_MESSAGE]': message
    })
  }
  async deleteTaskMessageResponse(
    taskId: string,
    messageId: string,
  ): Promise<GraphQLTypes.DeleteTaskMessageResponse> {
    return await this.get('task.commentitem.delete.json', {
      TASKID: taskId,
      ITEMID: messageId
    })
  }

  // Other
  async willSendRequest(request: RequestOptions): Promise<void> {
    request.params.set(
      'auth',
      this.context.user.accessToken,
    )
  }
  private async returnArray(response: Promise<IBitrixResponse>): Promise<Array<any>> {
    const { result } = await response;
    return Array.isArray(result)
      ? result
      : [];
  }
}
