import { Resolvers } from './GraphQLTypes';

export const resolvers: Resolvers = {
  Query: {
    // Bitrix
    GetProfile: (_, __,  { dataSources }) =>
      dataSources.bitrixApi.profile(),
    GetUserGroups: (_, { start }, { dataSources }) =>
      dataSources.bitrixApi.userGroups(start),
    GetGroupsTasks: (_, { groupId }, { dataSources }) =>
      dataSources.bitrixApi.getGroupsTasks(groupId),
    GetGroupById: (_, { groupId } , { dataSources }) =>
      dataSources.bitrixApi.getGroupById(groupId),
    GetTaskByID: (_, { taskId }, { dataSources }) =>
      dataSources.bitrixApi.getTaskById(taskId),
    GetGroupsUsers: (_, { groupId } , { dataSources }) =>
      dataSources.bitrixApi.getGroupsUsers(groupId),
    GetUserByID: (_, { userId }, { dataSources }) =>
      dataSources.bitrixApi.getUserById(userId),
    GetTaskComments: (_, { taskId }, { dataSources }) =>
      dataSources.bitrixApi.getTaskComments(taskId),
    SearchGroupByName: (_, { name }, { dataSources }) =>
      dataSources.bitrixApi.searchGroupByName(name),
    GetFeed: (_, { start, filter }, { dataSources }) =>
      dataSources.bitrixApi.getFeed(start, filter),

    // Yandex Metrika
    GetYandexMetrics: (_, {
      metrics,
      dimensions,
      date1,
      date2,
      bitrixGroupId,
      preset
    }, { dataSources }) =>
      dataSources.yandexMetrikaApi.getYandexMetrics({
        metrics,
        dimensions,
        date1,
        date2,
        bitrixGroupId,
        preset
      }),
    GetCounter: (_, { bitrixGroupId }, { dataSources }) =>
      dataSources.yandexMetrikaApi.getCounter(bitrixGroupId),

    // TopVisor
    GetTopvisorProject: (_, {bitrixGroupId}, { dataSources }) =>
      dataSources.topvisorApi.getProject(bitrixGroupId),
    GetTopvisorPositions: (_, {
      bitrixGroupId,
      projectId,
      regionIndexes,
      date1,
      date2,
    }, { dataSources }) =>
      dataSources.topvisorApi.getPositions({
        bitrixGroupId,
        projectId,
        regionIndexes,
        date1,
        date2,
      }),
    GetTopvisorSummaryChart: (_, {
      bitrixGroupId,
      projectId,
      regionIndex,
      date1,
      date2,
    }, { dataSources } ) =>
      dataSources.topvisorApi.getSummaryChart({
        bitrixGroupId,
        projectId,
        regionIndex,
        date1,
        date2,
      })
  },
  Mutation: {
    // Bitrix
    SendTaskMessage: (_, {
      taskId,
      message,
    }, { dataSources }) =>
      dataSources.bitrixApi.sendTaskMessage(taskId, message),
    SendFeedMessage: (_, {
      title,
      message,
      files,
      showFor
    }, { dataSources }) =>
      dataSources.bitrixApi.sendFeedMessage(title, message, files, showFor),
    DeleteTaskMessage: (_, { taskId, messageId }, { dataSources }) =>
      dataSources.bitrixApi.deleteTaskMessage(taskId, messageId),
  }
};
