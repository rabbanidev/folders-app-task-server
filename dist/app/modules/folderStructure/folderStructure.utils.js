"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformData = void 0;
const transformData = (inputData) => {
    const topLevelFolders = [];
    const folderMap = {};
    inputData.forEach((folder) => {
        var _a;
        folder.children = [];
        folderMap[folder.id] = folder;
        if (folder.folderId) {
            if (folderMap[folder.folderId]) {
                // @ts-ignore
                (_a = folderMap[folder.folderId]) === null || _a === void 0 ? void 0 : _a.children.push(folder);
            }
        }
        else {
            topLevelFolders.push(folder);
        }
    });
    return topLevelFolders;
};
exports.transformData = transformData;
