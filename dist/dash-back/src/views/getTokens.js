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
const axios_1 = __importDefault(require("axios"));
const user_1 = require("../models/user");
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { code, server_domain } = req.query;
    const params = {
        code,
        member_id: process.env.MEMBER_ID,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.APP_SECRET,
        grant_type: 'authorization_code'
    };
    let bitrixResponse;
    try {
        bitrixResponse = yield axios_1.default.get(`https://${server_domain}/oauth/token`, { params });
    }
    catch (e) {
        res.statusCode = bitrixResponse ? bitrixResponse.status : 403;
        throw new Error(e);
    }
    const { data } = bitrixResponse;
    if (yield user_1.User.exists({ userId: data.user_id })) {
        yield user_1.User.findOneAndUpdate({ userId: data.user_id }, {
            accessToken: data.access_token,
            refreshToken: data.refresh_token,
            expires: Date.now() + 60 * 60 * 1000
        });
    }
    else {
        yield new user_1.User({
            accessToken: data.access_token,
            refreshToken: data.refresh_token,
            userId: data.user_id,
            expires: Date.now() + 60 * 60 * 1000
        }).save();
    }
    const user = yield user_1.User.findById(data.user_id);
    const token = user.generateAuthToken();
    res.cookie('token', token);
    res.send(`<script>window.close();</script>`);
});
//# sourceMappingURL=getTokens.js.map