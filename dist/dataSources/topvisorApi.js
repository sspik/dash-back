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
const punycode_1 = __importDefault(require("punycode"));
class TopvisorApi extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.topvisor.com/v2/json';
    }
    getProject(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.post('get/projects_2/projects', {
                filters: [{
                        name: 'id',
                        operator: 'EQUALS',
                        values: [projectId]
                    }],
                show_searchers_and_regions: 1
            });
            if (!response.result || !response.result.length) {
                throw new Error('Проект не найден');
            }
            return response.result[0];
        });
    }
    getProjectByUrl(projectUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.post('get/projects_2/projects', {
                filters: [{
                        name: 'site',
                        operator: 'EQUALS',
                        values: [punycode_1.default.toASCII(projectUrl)]
                    }]
            });
            if (!response.result || !response.result.length) {
                throw new Error('Проект не найден');
            }
            return response.result[0];
        });
    }
    willSendRequest(request) {
        request.headers.set('Content-Type', 'application/json');
        request.headers.set('Authorization', `bearer ${process.env.TOPVISOR_TOKEN}`);
        request.headers.set('User-Id', process.env.TOPVISOR_USER);
    }
}
exports.Topvisor = new TopvisorApi();
//# sourceMappingURL=topvisorApi.js.map