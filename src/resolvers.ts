import { Resolvers } from './GraphQLTypes';

export const resolvers: Resolvers = {
  Query: {
    // Bitrix
    GetProfile: (_, __,  { dataSources }) =>
      dataSources.bitrixApi.profile(),
    GetUserGroups: (_, __, { dataSources }) =>
      dataSources.bitrixApi.userGroups(),
    GetGroupsTasks: (_, { groupId }, { dataSources }) =>
      dataSources.bitrixApi.getGroupsTasks(groupId),
    GetGroupById: (_, { groupId } , { dataSources }) =>
      dataSources.bitrixApi.getGroupById(groupId),
    GetGroupsUsers: (_, { groupId } , { dataSources }) =>
      dataSources.bitrixApi.getGroupsUsers(groupId),
    GetUserByID: (_, { userId }, { dataSources }) =>
      dataSources.bitrixApi.getUserById(userId),
    GetTaskComments: (_, { taskId }, { dataSources }) =>
      dataSources.bitrixApi.getTaskComments(taskId),

    // Yandex Metrika
    GetYandexMetrics: (_, { metrics, dimensions, date1, date2 }, { dataSources }) =>
      dataSources.yandexMetrikaApi.getYandexMetrics({
        metrics,
        dimensions,
        date1,
        date2,
      }),
    GetCounterStatus: (_, { counter }, { dataSources }) =>
      dataSources.yandexMetrikaApi.checkCounter(counter)
  },
  Mutation: {
    // Bitrix
    SendTaskComments: (_, { taskId, message }, { dataSources }) =>
      dataSources.bitrixApi.sendTaskMessage(taskId, message),
    DeleteTaskMessage: (_, {taskId, messageId}, { dataSources }) =>
      dataSources.bitrixApi.deleteTaskMessageResponse(taskId, messageId)
  }
};
