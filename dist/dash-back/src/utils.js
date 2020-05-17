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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const axios_1 = __importDefault(require("axios"));
function decodeToken(token) {
    const secret = process.env.SECRET_KEY;
    return jsonwebtoken_1.default.verify(token, secret);
}
exports.decodeToken = decodeToken;
function encodeToken(payload) {
    return jsonwebtoken_1.default.sign(payload, process.env.SECRET_KEY);
}
exports.encodeToken = encodeToken;
function refreshToken(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const params = {
            grant_type: 'refresh_token',
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.APP_SECRET,
            refresh_token: user.refreshToken
        };
        try {
            const response = yield axios_1.default.get(process.env.BITRIX_REFRESH_TOKEN_URL, {
                params
            });
            const { data } = response;
            yield user.updateUser({
                userId: data.user_id,
                accessToken: data.access_token,
                refreshToken: data.refresh_token,
                expires: Date.now() + 60 * 60 * 1000,
            });
        }
        catch (e) {
            throw new Error('На стадии обновления токена, oauth.bitrix.info ' +
                'отдал ошибочный ответ сервера');
        }
    });
}
exports.refreshToken = refreshToken;
//# sourceMappingURL=utils.js.map