"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderStructureRoutes = void 0;
const express_1 = __importDefault(require("express"));
const folderStructure_controller_1 = require("./folderStructure.controller");
const router = express_1.default.Router();
router.post('/create', folderStructure_controller_1.FolderStructureController.createFolder);
router.delete('/delete/:id', folderStructure_controller_1.FolderStructureController.deleteFolder);
router.get('/', folderStructure_controller_1.FolderStructureController.getAllFolders);
router.get('/:id', folderStructure_controller_1.FolderStructureController.getFolder);
exports.FolderStructureRoutes = router;
