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
exports.FolderStructureService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const folderStructure_model_1 = __importDefault(require("./folderStructure.model"));
const folderStructure_utils_1 = require("./folderStructure.utils");
const createFolder = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield folderStructure_model_1.default.create(payload);
    return result;
});
const getAllFolders = () => __awaiter(void 0, void 0, void 0, function* () {
    const folders = yield folderStructure_model_1.default.find();
    const data = folders.map((folder) => ({
        id: folder._id,
        folderId: (folder === null || folder === void 0 ? void 0 : folder.folderId) ? folder.folderId.toString() : '',
        folderName: folder.folderName,
        children: [],
    }));
    const result = (0, folderStructure_utils_1.transformData)(data);
    return result;
});
const getFolder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield folderStructure_model_1.default.findById(id);
    return result;
});
const deleteFolder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const exitFolder = yield folderStructure_model_1.default.findById(id);
    if (!exitFolder) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Folder not found!');
    }
    else if (exitFolder.folderName === 'Root') {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Root Folder does not delete!');
    }
    const result = yield folderStructure_model_1.default.findByIdAndDelete(id);
    return result;
});
exports.FolderStructureService = {
    createFolder,
    getAllFolders,
    getFolder,
    deleteFolder,
};
