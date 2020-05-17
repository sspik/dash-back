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
const TopVisorRegionSchema = new mongoose_1.Schema({
    regionId: { type: Number, required: true, unique: true },
    name: { type: String, required: true, unique: false },
    areaName: { type: String, required: false, unique: false },
    searcherName: { type: String, required: true, unique: true }
});
const TopvisorSchema = new mongoose_1.Schema({
    projectId: { type: Number, required: true, unique: true },
    site: { type: Number, required: true, unique: false },
    name: { type: Number, required: true, unique: false },
    regions: [
        { type: mongoose_1.Schema.Types.ObjectId, ref: 'TopvisorRegion' }
    ]
});
exports.TopvisorRegion = mongoose_1.default.model('TopvisorRegion', TopVisorRegionSchema);
exports.Topvisor = mongoose_1.default.model('Topvisor', TopvisorSchema);
//# sourceMappingURL=topvisor.js.map