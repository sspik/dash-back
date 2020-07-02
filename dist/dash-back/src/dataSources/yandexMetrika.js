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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
const yandexMetrika_1 = require("../models/yandexMetrika");
const utils_1 = require("../utils");
const bitrix24_1 = require("./bitrix24");
class YandexMetrikaApi extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api-metrika.yandex.net';
    }
    getYandexMetrics(params) {
        return __awaiter(this, void 0, void 0, function* () {
            Object.keys(params).forEach(key => params[key] === undefined
                && delete params[key]);
            try {
                const { bitrixGroupId } = params, yandexParams = __rest(params, ["bitrixGroupId"]);
                const response = yield this.get('stat/v1/data/bytime.json', Object.assign(Object.assign({}, yandexParams), { ids: yield this.getCounterId(params.bitrixGroupId), lang: 'ru', group: "day" }));
                // Из api data.metrics приходит 2-мерным массивом, внутри которого
                // и float, и number. Конвертирую его в number для GraphQl
                return Object.assign(Object.assign({}, response), { data: response.data.map(d => (Object.assign(Object.assign({}, d), { metrics: d.metrics.map(mArr => mArr.map((m) => parseInt(m))) }))) });
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    willSendRequest(request) {
        request.headers.set('Authorization', `OAuth ${process.env.YANDEX_METRIKA_TOKEN}`);
    }
    getCounter(bitrixGroupId) {
        return __awaiter(this, void 0, void 0, function* () {
            const counterId = yield this.getCounterId(bitrixGroupId);
            const response = yield this.get(`/management/v1/counter/${counterId}`);
            if (!response.counter)
                throw new Error('Не удалось получилоть счётчик из API Метрики');
            return response.counter;
        });
    }
    getCounterByDomain(domainString) {
        return __awaiter(this, void 0, void 0, function* () {
            const domain = utils_1.extractDomain(domainString);
            if (!domain)
                throw new Error('Имя группы не является доменным именем');
            const response = yield this.get('management/v1/counters');
            const counters = response.counters;
            if (!Array.isArray(counters))
                throw new Error('Ошибка получения списка счётчиков');
            const counter = counters.filter(c => c.site === domain);
            if (counter.length === 0)
                throw new Error('Счётчик не найден');
            return counter[0];
        });
    }
    getCounterId(bitrixGroupId) {
        return __awaiter(this, void 0, void 0, function* () {
            let counterId;
            try {
                const yandexMetrka = yield yandexMetrika_1.YandexMetrika.findOne({
                    bitrixGroupId
                });
                counterId = yandexMetrka.counter.toString();
            }
            catch (_a) {
                const bitrixGroup = yield bitrix24_1.Bitrix.getGroupByToken(bitrixGroupId, this.context.user.accessToken);
                if (!bitrixGroup)
                    throw new Error('Группа не найдена или доступ запрещён');
                const counter = yield this.getCounterByDomain(bitrixGroup.NAME);
                const yandexMetrika = yield new yandexMetrika_1.YandexMetrika({
                    userId: this.context.user.userId,
                    counter: counter.id,
                    bitrixGroupId,
                });
                yield yandexMetrika.save();
                counterId = counter.id;
            }
            return counterId;
        });
    }
}
exports.YandexMetrika = new YandexMetrikaApi();
//# sourceMappingURL=yandexMetrika.js.map