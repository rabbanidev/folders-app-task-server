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
exports.FolderStructureController = void 0;
const folderStructure_service_1 = require("./folderStructure.service");
const http_status_1 = __importDefault(require("http-status"));
const createFolder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield folderStructure_service_1.FolderStructureService.createFolder(req.body);
        res.status(http_status_1.default.CREATED).send({
            status: http_status_1.default.CREATED,
            message: 'Folder created successfully!',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getAllFolders = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield folderStructure_service_1.FolderStructureService.getAllFolders();
        res.status(200).send({
            status: http_status_1.default.OK,
            message: 'Folders fetched successfully!',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getFolder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield folderStructure_service_1.FolderStructureService.getFolder(req.params.id);
        res.status(200).send({
            status: http_status_1.default.OK,
            message: 'Folder fetched successfully!',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const deleteFolder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield folderStructure_service_1.FolderStructureService.deleteFolder(req.params.id);
        res.status(200).send({
            status: http_status_1.default.OK,
            message: 'Folder deleted successfully!',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.FolderStructureController = {
    createFolder,
    getAllFolders,
    getFolder,
    deleteFolder,
};
