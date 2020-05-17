"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
class BitrixAPI extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.BITRIX24_API_ENDPOINT;
    }
    // Queries
    profile() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.get('profile');
            return response.result;
        });
    }
    userShortGroups() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield BitrixAPI.returnArray(this.post('sonet_group.user.groups', {
                order: { "ID": "ASC" },
                select: ["ID"],
            }));
        });
    }
    userGroups(start = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            const userGroupsShort = yield this.userShortGroups();
            const groupsIds = userGroupsShort.map((group) => {
                return group.GROUP_ID;
            });
            return yield this.post('sonet_group.get', {
                start,
                FILTER: {
                    LOGIC: 'OR',
                    ID: groupsIds
                }
            });
        });
    }
    searchGroupByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const groups = yield this.post('sonet_group.get', {
                FILTER: {
                    '%NAME': name
                }
            });
            const userShortGroups = yield this.userShortGroups();
            return groups && Array.isArray(groups.result)
                ? groups.result.filter((group) => {
                    userShortGroups.map(g => g.GROUP_ID).includes(group.ID);
                })
                : [];
        });
    }
    getGroupById(groupId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.get('sonet_group.get', { 'FILTER[ID]': groupId });
            return response.result[0];
        });
    }
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.get('user.get', {
                'ID': userId
            });
            return response.result[0];
        });
    }
    getUserByIds(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            return ids.map((userId) => __awaiter(this, void 0, void 0, function* () {
                return yield this.getUserById(userId);
            }));
        });
    }
    getGroupsUsers(groupId) {
        return __awaiter(this, void 0, void 0, function* () {
            const usersId = yield BitrixAPI.returnArray(this.get('sonet_group.user.get', {
                'ID': groupId
            }));
            return yield this.getUserByIds(usersId.map(u => u["USER_ID"]));
        });
    }
    getGroupsTasks(groupId) {
        return __awaiter(this, void 0, void 0, function* () {
            return BitrixAPI.returnArray(this.get('task.item.list', {
                '0[DEADLINE]': 'desc',
                '1[GROUP_ID][0]': groupId
            }));
        });
    }
    getTaskComments(taskID) {
        return __awaiter(this, void 0, void 0, function* () {
            return BitrixAPI.returnArray(this.get('task.commentitem.getlist.json', {
                TASKID: taskID
            }));
        });
    }
    // Mutations
    sendTaskMessage(taskId, message) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get('task.commentitem.add.json', {
                '0': taskId,
                '1[POST_MESSAGE]': message
            });
        });
    }
    deleteTaskMessageResponse(taskId, messageId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get('task.commentitem.delete.json', {
                TASKID: taskId,
                ITEMID: messageId
            });
        });
    }
    // Other
    willSendRequest(request) {
        return __awaiter(this, void 0, void 0, function* () {
            request.params.set('auth', this.context.user.accessToken);
        });
    }
    static returnArray(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { result } = yield response;
            return Array.isArray(result)
                ? result
                : [];
        });
    }
}
exports.BitrixAPI = BitrixAPI;
//# sourceMappingURL=bitrix24.js.map