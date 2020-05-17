"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getClientCode_1 = __importDefault(require("./getClientCode"));
const getTokens_1 = __importDefault(require("./getTokens"));
const homePage_1 = __importDefault(require("./homePage"));
const setYandexMetrikaToken_1 = __importDefault(require("./setYandexMetrikaToken"));
exports.default = {
    getClientCode: getClientCode_1.default,
    getTokens: getTokens_1.default,
    homePage: homePage_1.default,
    setYandexMetrikaToken: setYandexMetrikaToken_1.default,
};
//# sourceMappingURL=index.js.map