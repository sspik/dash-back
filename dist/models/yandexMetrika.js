"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const YandexMetrikaSchema = new mongoose_1.Schema({
    counter: { type: Number, required: true, unique: true },
    userId: { type: Number, required: true, unique: false },
    bitrixGroupId: { type: Number, required: true, unique: true },
});
exports.YandexMetrika = mongoose_1.default.model('YandexMetrika', YandexMetrikaSchema);
//# sourceMappingURL=yandexMetrika.js.map