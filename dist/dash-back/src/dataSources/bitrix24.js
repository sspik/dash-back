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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
const lodash_1 = __importDefault(require("lodash"));
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
                ? groups.result.filter((group) => (userShortGroups.map(g => g.GROUP_ID).includes(group.ID)))
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
            const response = yield this.post('user.get', {
                FILTER: {
                    LOGIC: 'OR',
                    ID: ids
                }
            });
            if (!Array.isArray(response.result)) {
                throw new Error('Ошибка при получении пользователей');
            }
            return response.result;
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
            let tasks = [];
            let start = 0;
            while (true) {
                const response = yield this.post('task.item.list', {
                    'ORDER': {
                        'DEADLINE': 'DESC'
                    },
                    'FILTER': {
                        'GROUP_ID': [groupId]
                    },
                    'start': start
                });
                if (response.result && response.result.length) {
                    tasks.push(...response.result);
                }
                if (response.next) {
                    start = response.next;
                }
                else {
                    break;
                }
            }
            return tasks;
        });
    }
    getTaskComments(taskID) {
        return __awaiter(this, void 0, void 0, function* () {
            return BitrixAPI.returnArray(this.get('task.commentitem.getlist', {
                TASKID: taskID
            }));
        });
    }
    getFeed(start = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            const feeds = yield this.post('log.blogpost.get', {
                start
            });
            if (!Array.isArray(feeds.result)) {
                throw new Error('Ошибка при получении живой ленты');
            }
            // Получаем объекты пользователей по их ID
            const userIds = lodash_1.default.uniq(feeds.result.map((f) => f.AUTHOR_ID));
            const users = yield this.getUserByIds(userIds);
            // Получаем объекты файлов
            let fileIds = [];
            feeds.result.forEach((f) => {
                f.FILES ? fileIds.push(...f.FILES) : null;
            });
            const files = yield this.getAttachments(fileIds);
            // Собираем новый result с файлами и пользователями
            feeds.result = feeds.result.map((f) => (Object.assign(Object.assign({}, f), { AUTHOR: users.filter(u => u.ID === f.AUTHOR_ID)[0], FILES: Array.isArray(f.FILES) && f.FILES.length
                    ? files.filter((file => {
                        return f.FILES.includes(parseInt(file.ID));
                    }))
                    : [] })));
            return feeds;
        });
    }
    getAttachments(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            let batchArray = [];
            ids.forEach((id) => {
                const keyName = `query${id}`;
                batchArray.push({
                    [keyName]: `disk.attachedObject.get?id=${id}`
                });
            });
            let files = [];
            for (let pkg of lodash_1.default.chunk(batchArray, 50)) {
                let queries = {};
                for (let p of pkg) {
                    queries = Object.assign(Object.assign({}, queries), p);
                }
                try {
                    const response = yield this.post('batch', {
                        cmd: queries
                    });
                    Object.values(response.result.result).forEach((r) => {
                        r.DOWNLOAD_URL = `${process.env.BACKEND_URL}/attachment/${r.ID}`;
                        files.push(r);
                    });
                }
                catch (e) {
                    throw new Error(`Ошибка выполнения batch запроса на файлы\n${e}`);
                }
            }
            return files;
        });
    }
    // Mutations
    sendTaskMessage(taskId, message) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get('task.commentitem.add', {
                '0': taskId,
                '1[POST_MESSAGE]': message
            });
        });
    }
    deleteTaskMessage(taskId, messageId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get('task.commentitem.delete', {
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