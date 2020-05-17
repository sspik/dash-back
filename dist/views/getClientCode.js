"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (req, res) => {
    res.redirect(302, `${process.env.BITRIX24_URL}/oauth/authorize/?client_id=${process.env.CLIENT_ID}`);
};
//# sourceMappingURL=getClientCode.js.map