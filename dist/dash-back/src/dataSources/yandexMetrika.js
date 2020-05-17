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
class YandexMetrikaError extends Error {
}
exports.YandexMetrikaError = YandexMetrikaError;
class YandexMetrikaApi extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.error = new YandexMetrikaError('Ошибка Яндекс Метрики');
        this.baseURL = 'https://api-metrika.yandex.net';
    }
    getYandexMetrics(params) {
        return __awaiter(this, void 0, void 0, function* () {
            Object.keys(params).forEach(key => params[key] === undefined
                ? delete params[key] : {});
            return yield this.get('stat/v1/data.json', Object.assign(Object.assign({}, params), { ids: this.context.user.yandexMetrikaId, lang: 'ru' }));
        });
    }
    checkCounter(counter) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.get(`management/v1/counter/${counter}`);
            if (!resp.counter) {
                throw this.error;
            }
            return resp.counter;
        });
    }
    willSendRequest(request) {
        request.headers.set('Authorization', `OAuth ${process.env.YANDEX_METRIKA_TOKEN}`);
    }
}
exports.YandexMetrikaApi = YandexMetrikaApi;
//# sourceMappingURL=yandexMetrika.js.map