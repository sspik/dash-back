"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const views_1 = __importDefault(require("./views"));
const auth_1 = require("./middleswares/auth");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const body_parser_1 = __importDefault(require("body-parser"));
exports.default = (app) => {
    app.use(cookie_parser_1.default());
    app.use(express_1.default.json());
    app.use(body_parser_1.default.urlencoded({
        extended: true
    }));
    app.use(auth_1.authMiddleware);
    app.set('view engine', 'pug');
    app.set('views', process.env.TEMPLATE_PATH);
    app.get('/auth/client', views_1.default.getClientCode);
    app.get('/auth/login', views_1.default.getTokens);
    app.get('/', auth_1.authMiddleware, views_1.default.homePage);
    app.post('/setYandexMetrikaId', auth_1.authMiddleware, views_1.default.setYandexMetrikaToken);
    return app;
};
//# sourceMappingURL=routes.js.map