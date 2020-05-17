"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = {
    Query: {
        // Bitrix
        GetProfile: (_, __, { dataSources }) => dataSources.bitrixApi.profile(),
        GetUserGroups: (_, { start }, { dataSources }) => dataSources.bitrixApi.userGroups(start),
        GetGroupsTasks: (_, { groupId }, { dataSources }) => dataSources.bitrixApi.getGroupsTasks(groupId),
        GetGroupById: (_, { groupId }, { dataSources }) => dataSources.bitrixApi.getGroupById(groupId),
        GetGroupsUsers: (_, { groupId }, { dataSources }) => dataSources.bitrixApi.getGroupsUsers(groupId),
        GetUserByID: (_, { userId }, { dataSources }) => dataSources.bitrixApi.getUserById(userId),
        GetTaskComments: (_, { taskId }, { dataSources }) => dataSources.bitrixApi.getTaskComments(taskId),
        SearchGroupByName: (_, { name }, { dataSources }) => dataSources.bitrixApi.searchGroupByName(name),
        GetFeed: (_, { start }, { dataSources }) => dataSources.bitrixApi.getFeed(start),
        // Yandex Metrika
        GetYandexMetrics: (_, { metrics, dimensions, date1, date2 }, { dataSources }) => dataSources.yandexMetrikaApi.getYandexMetrics({
            metrics,
            dimensions,
            date1,
            date2,
        }),
        GetCounterStatus: (_, { counter }, { dataSources }) => dataSources.yandexMetrikaApi.checkCounter(counter),
        // TopVisor
        GetTopvisorProjectById: (_, { projectId }, { dataSources }) => dataSources.topvisorApi.getProjectById(projectId),
        GetTopvisorProjectByUrl: (_, { projectUrl }, { dataSources }) => dataSources.topvisorApi.getProjectByUrl(projectUrl),
    },
    Mutation: {
        // Bitrix
        SendTaskMessage: (_, { taskId, message }, { dataSources }) => dataSources.bitrixApi.sendTaskMessage(taskId, message),
        DeleteTaskMessage: (_, { taskId, messageId }, { dataSources }) => dataSources.bitrixApi.deleteTaskMessage(taskId, messageId),
        // Yandex Metrika
        AddYandexMetrikaCounter: (_, { counterId }, { dataSources }) => dataSources.yandexMetrikaApi.addCounter(counterId),
        // Topvisor
        AddTopvisorProject: (_, { projectId }, { dataSources }) => dataSources.topvisor.addTopvisorProject(projectId)
    }
};
//# sourceMappingURL=resolvers.js.map