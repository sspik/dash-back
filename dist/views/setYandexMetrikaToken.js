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
const dataSources_1 = require("../dataSources");
const yandexMetrika_1 = require("../models/yandexMetrika");
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.contentType('Application/json');
    const { ids } = req.body;
    const YandexApi = new dataSources_1.YandexMetrikaApi();
    let data;
    try {
        data = yield YandexApi.checkCounter(ids);
    }
    catch (e) {
        res.status(403);
        res.send(JSON.stringify({
            error: e
        }));
        return;
    }
    const counter = new yandexMetrika_1.YandexMetrika({
        counterId: data.id,
        status: data.status,
        name: data.name,
        ownerLogin: data.owner_login,
        site: data.site
    });
    yield counter.save();
    const { user } = req;
    yield req.user.updateUser({
        userId: user.userId,
        accessToken: user.accessToken,
        refreshToken: user.refreshToken,
        expires: user.expires,
        yandexMetrika: [...req.user.yandexMetrika, counter]
    });
    res.send(JSON.stringify({
        status: 'ok'
    }));
});
//# sourceMappingURL=setYandexMetrikaToken.js.map