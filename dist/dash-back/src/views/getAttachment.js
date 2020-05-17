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
const querystring_1 = __importDefault(require("querystring"));
const request_1 = __importDefault(require("request"));
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { attachment } = req.params;
    const queryParams = querystring_1.default.encode({
        attachedId: attachment,
        'auth[auth]': req.user.accessToken,
        action: 'download',
        ncc: 1,
    });
    const downloadUrl = `${process.env.BITRIX24_URL}/bitrix/tools/disk/uf.php?${queryParams}`;
    request_1.default(downloadUrl).pipe(res);
});
//# sourceMappingURL=getAttachment.js.map