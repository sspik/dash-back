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
const utils_1 = require("../utils");
const UserSchema = new mongoose_1.Schema({
    userId: { type: Number, required: true, unique: true },
    accessToken: { type: String, required: true, unique: true },
    refreshToken: { type: String, required: true, unique: true },
    expires: { type: Number, required: true },
});
UserSchema.statics.findById = function findById(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield exports.User.findOne({ userId });
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    });
};
UserSchema.methods.updateUser = function updateUser(userData) {
    return __awaiter(this, void 0, void 0, function* () {
        Object.assign(this, Object.assign({}, userData));
        yield this.save();
    });
};
UserSchema.methods.generateAuthToken = function generateAuthToken() {
    return utils_1.encodeToken({
        userId: this.userId,
        expires: this.expires,
        accessToken: this.accessToken,
        refreshToken: this.refreshToken,
    });
};
exports.User = mongoose_1.default.model('User', UserSchema);
//# sourceMappingURL=user.js.map