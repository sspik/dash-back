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
    counterId: { type: Number, required: true, unique: true },
    status: { type: String, required: true, unique: false },
    name: { type: String, required: true, unique: false },
    ownerLogin: { type: String, required: true, unique: false },
    site: { type: String, required: true, unique: false },
});
YandexMetrikaSchema.methods.updateCounter = function updateCounter(counterData) {
    return __awaiter(this, void 0, void 0, function* () {
        Object.assign(this, Object.assign({}, counterData));
        yield this.save();
    });
};
YandexMetrikaSchema.statics.findByCounterId = function findByCounterId(counterId) {
    return __awaiter(this, void 0, void 0, function* () {
        const counter = exports.YandexMetrika.findOne({ counterId });
        if (!counter) {
            throw new Error('Counter not found');
        }
        return counter;
    });
};
exports.YandexMetrika = mongoose_1.default.model('YandexMetrka', YandexMetrikaSchema);
//# sourceMappingURL=yandexMetrika.js.map