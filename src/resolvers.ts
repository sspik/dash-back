import { Resolvers } from './GraphQLTypes';

export const resolvers: Resolvers = {
  Query: {
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
      dataSources.bitrixApi.getTaskComments(taskId)
  },
  Mutation: {
    SendTaskComments: (_, { taskId, message }, { dataSources }) =>
      dataSources.bitrixApi.sendTaskMessage(taskId, message),
    DeleteTaskMessage: (_, {taskId, messageId}, { dataSources }) =>
      dataSources.bitrixApi.deleteTaskMessageResponse(taskId, messageId)
  }
};
