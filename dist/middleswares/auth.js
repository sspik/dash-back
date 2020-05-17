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
const utils_1 = require("../utils");
const user_1 = require("../models/user");
const authPaths = [
    '/auth/client',
    '/auth/login',
];
const localIps = [
    '::ffff:127.0.0.1'
];
exports.authMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (authPaths.includes(req.path)) {
        next();
        return;
    }
    try {
        const token = req.cookies.token;
        if (!token)
            return res.status(401).send('Доступ запрещён');
        const userData = utils_1.decodeToken(token);
        const user = yield user_1.User.findById(userData.userId);
        if (user.expires < Date.now()) {
            yield utils_1.refreshToken(user);
        }
        req.user = user;
        next();
    }
    catch (e) {
        res.status(400).json({
            error: new Error('Неправильный токен')
        });
        next();
    }
});
//# sourceMappingURL=auth.js.map