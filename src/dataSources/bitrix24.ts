import Axois from 'axios';
import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";
import * as GraphQLTypes from '../GraphQLTypes';
import _ from 'lodash';
import { IFileStream } from "../interfaces";
import { saveStream } from "../utils";

interface IBatchRequest { [key: string]: string }

interface IBitrixResponse<T> {
  result?: Array<T>
  error?: string
  error_description?: string
}

class BitrixAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.BITRIX24_API_ENDPOINT;
  }

  // Queries
  async profile(): Promise<GraphQLTypes.Profile> {
    const response = await this.get('profile');
    return response.result;
  }

  async userShortGroups(): Promise<Array<GraphQLTypes.WorkGroupShort>> {
    return await BitrixAPI.returnArray<GraphQLTypes.WorkGroupShort>(this.post('sonet_group.user.groups', {
      order: { "ID": "ASC" },
      select: [ "ID" ],
    }))
  }

  async userGroups(start = 0): Promise<GraphQLTypes.WorkGroupResponse>{
    const userGroupsShort = await this.userShortGroups();
    const groupsIds = userGroupsShort.map((group: GraphQLTypes.WorkGroupShort) => {
        return group.GROUP_ID
      });
    return await this.post(
      'sonet_group.get',
      {
        start,
        FILTER: {
          LOGIC: 'OR',
          ID: groupsIds
        }
      });
  }

  async searchGroupByName(name: string): Promise<Array<GraphQLTypes.WorkGroup>> {
    const groups = await this.post(
      'sonet_group.get',
      {
        FILTER: {
          '%NAME': name
        }
      })
    const userShortGroups = await this.userShortGroups();
    return groups && Array.isArray(groups.result)
      ? groups.result.filter((group: GraphQLTypes.WorkGroup) => (
        userShortGroups.map(g => g.GROUP_ID).includes(group.ID)
      ))
      : []
  }

  async getGroupById(groupId: string): Promise<GraphQLTypes.WorkGroup>{
    const response = await this.get(
      'sonet_group.get',
      { 'FILTER[ID]': groupId }
    );
    return response.result[0]
  }

  async getUserById(userId: string): Promise<GraphQLTypes.BitrixUser> {
    let batchResponse;
    try {
      batchResponse = await this.post('batch', {
        cmd: {
          getUser: `user.get?ID=${userId}`,
          getDepartament: 'department.get?ID=$result[getUser][0][UF_DEPARTMENT][0]'
        }
      });
    } catch (e) {
      throw new Error(`Ошибка получения пользователя по ID ${e.message}`)
    }
    return {
      ...batchResponse.result.result.getUser[0],
      DEPARTAMENT: batchResponse.result.result.getDepartament[0].NAME
    }
  }

  async getUserByIds(ids: Array<string>): Promise<Array<GraphQLTypes.BitrixUser>> {
    const response = await this.post('user.get', {
      FILTER: {
        LOGIC: 'OR',
        ID: ids
      }
    });
    if (!Array.isArray(response.result)) {
      throw new Error('Ошибка при получении пользователей')
    }
    return response.result
  }

  async getGroupsUsers(groupId: string): Promise<Array<GraphQLTypes.BitrixUser>> {
    const usersId = await BitrixAPI.returnArray<GraphQLTypes.BitrixUser>(
      this.get('sonet_group.user.get',{
        'ID': groupId
      })
    );
    return await this.getUserByIds(usersId.map(u => u["USER_ID" as "ID"]))
  }

  async getGroupsTasks(groupId: string): Promise<Array<GraphQLTypes.Task>> {
    let tasks: GraphQLTypes.Task[] = [];
    let start = 0;
    while (true) {
      const response = await this.post('task.item.list', {
        'ORDER': {
          'DEADLINE': 'DESC'
        },
        'FILTER': {
          'GROUP_ID': [groupId]
        },
        'start': start
      });
      if (response.result && response.result.length) {
        tasks.push(...response.result)
      }
      if (response.next) {
        start = response.next
      } else {
        break
      }
    }
    return tasks;
  }

  async getTaskComments(
    taskID: string
  ): Promise<Array<Promise<GraphQLTypes.TaskComment>>> {
    const commentsResponse = await BitrixAPI.returnArray<GraphQLTypes.TaskComment>(
      this.get('task.commentitem.getlist',
        { TASKID: taskID  }
        )
    );
    if (commentsResponse.length === 0) return [];
    const authorIds = commentsResponse.map(c => {
      return c.AUTHOR_ID
    });
    const authors = await this.getUserByIds(authorIds);
    return commentsResponse.map(async (c) => {
      let comment: GraphQLTypes.TaskComment = c;
      if (c.ATTACHED_OBJECTS) {
        let fileIds = Object.keys(c.ATTACHED_OBJECTS);
        comment['FILES'] = await this.getAttachments(fileIds);
      } else {
        comment['FILES'] = []
      }
      comment['AUTHOR'] = _.first(authors.filter(a => a.ID === comment['AUTHOR_ID']))
      return comment;
    })
  }

  async getFeed(start: number = 0, filter?: string[]): Promise<GraphQLTypes.FeedResponse> {
    const feeds = await this.post('log.blogpost.get', {
      start,
      LOG_RIGHTS: filter
    });
    if (!Array.isArray(feeds.result)) {
      throw new Error('Ошибка при получении живой ленты')
    }
    // Получаем объекты пользователей по их ID
    const userIds = _.uniq<string>(feeds.result.map((f: GraphQLTypes.Feed) => f.AUTHOR_ID));
    const users = await this.getUserByIds(userIds);
    // Получаем объекты файлов
    let fileIds: Array<any> = [];
    feeds.result.forEach((f: any) => {
      f.FILES && fileIds.push(...f.FILES)
    });

    const files = await this.getAttachments(fileIds)

    // Собираем новый result с файлами и пользователями
    feeds.result = feeds.result.map((f: any) => ({
      ...f,
      AUTHOR: users.filter(u => u.ID === f.AUTHOR_ID)[0],
      FILES: Array.isArray(f.FILES) && f.FILES.length
        ? files.filter((file => {
          return f.FILES.includes(parseInt(file.ID))
        }))
        : []
    }))
    return feeds;
  }

  async getAttachments(ids: string[]): Promise<GraphQLTypes.Attachment[]> {
    let batchArray: IBatchRequest[] = [];
    ids.forEach(( id ) => {
      const keyName = `query${id}`
      batchArray.push({
        [keyName]: `disk.attachedObject.get?id=${id}`
      })
    });
    let files: GraphQLTypes.Attachment[] = [];
    for (let pkg  of _.chunk(batchArray, 50)) {
      let queries = {};
      for (let p of pkg) {
        queries = {
          ...queries,
          ...p
        }
      }
      try {
        const response = await this.post('batch', {
          cmd: queries
        });
        Object.values(response.result.result).forEach((r: any) => {
          r.DOWNLOAD_URL = `${process.env.BACKEND_URL}/attachment/${r.ID}`
          files.push(r)
        })
      } catch (e) {
        throw new Error(`Ошибка выполнения batch запроса на файлы\n${e}`)
      }
    }
    return files
  }

  async getTaskById(taskId: string): Promise<GraphQLTypes.TaskDetail> {
    let task: GraphQLTypes.TaskDetail
    try {
      const taskResponse = await this.get('tasks.task.get', {
        taskId
      });
      task = taskResponse.result.task;
    } catch {
      throw new Error('Ошибка получения задачи')
    }
    if (!Array.isArray(task.ufTaskWebdavFiles)) return task
    const files = await this.getAttachments(task.ufTaskWebdavFiles);
    return {
      ...task,
      files,
    }
  }

  // Mutations
  async sendTaskMessage(
    taskId: string,
    message: string,
  ): Promise<GraphQLTypes.SendTaskMessageResponse> {
    return await this.post('task.commentitem.add', {
      TASKID: taskId,
      FIELDS: {
        POST_MESSAGE: message,
      }
    })
  }

  async sendFeedMessage(
    title: string,
    message: string,
    files?: Array<Promise<IFileStream>>,
    showFor?: string[]
  ): Promise<GraphQLTypes.FeedMessageResponse> {
    let filesToSend: string[][];
    if (Array.isArray(files)){
      const makeFiles = files.map(async (filePromise) => {
        const file = await filePromise;
        const readStream = file.createReadStream();
        return [ file.filename, await saveStream(readStream) ]
      })
      filesToSend = await Promise.all(makeFiles);
    }
    try {
      return await this.post('log.blogpost.add', {
        USER_ID: this.context.user.userId,
        TITLE: title,
        POST_MESSAGE: message,
        FILES: filesToSend,
        DEST: showFor,
      })
    } catch (e) {
      throw new Error(`Ошибка публикации сообщения ${e.message}`)
    }
  }

  // Other
  async willSendRequest(request: RequestOptions): Promise<void> {
    // Если запрос пришел из graphql, то подкитываем access токен
    // из пользоватлея
    if (this.context.user) {
      request.params.set(
        'auth',
        this.context.user.accessToken,
      )
    }
  }
  private static async returnArray<T>(response: Promise<IBitrixResponse<T>>): Promise<Array<T>> {
    const { result } = await response;
    return Array.isArray(result) ? result : [];
  }

  // Методы для вызова из других api
  async getUserAccess(groupId: string, userToken: string): Promise<boolean> {
    type TResponse = {"result": boolean};
    const response = await Axois.post<TResponse>(
      `${process.env.BITRIX24_API_ENDPOINT}/sonet_group.feature.access`,
      {
        GROUP_ID: groupId,
        auth: userToken,
        FEATURE: "blog",
        OPERATION: "write_post"
      });
    return response.data.result;
  }
  async getGroupByToken(groupId: string, userToken: string): Promise<GraphQLTypes.WorkGroup> {
    if (!await this.getUserAccess(groupId, userToken)) return;
    type TResponse = { result: GraphQLTypes.WorkGroup[] };
    const response = await Axois.post<TResponse>(
      `${process.env.BITRIX24_API_ENDPOINT}/sonet_group.get`,
      {
        FILTER: { ID: groupId },
        auth: userToken
      }
    )
    return Array.isArray(response.data.result) && response.data.result[0];
  }
  async userIsAdmin(token: string): Promise<boolean> {
    const response = await Axois.get(
      `${process.env.BITRIX24_API_ENDPOINT}/user.admin`,
      { params: { auth: token } }
    );
    return response.data.result
  }
}

export const Bitrix = new BitrixAPI()
