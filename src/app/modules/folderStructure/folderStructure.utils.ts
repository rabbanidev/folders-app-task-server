/* eslint-disable @typescript-eslint/ban-ts-comment */
import { IFolderResponse } from './folderStructure.interface';

export const transformData = (
  inputData: IFolderResponse[]
): IFolderResponse[] => {
  const topLevelFolders: IFolderResponse[] = [];

  const folderMap: { [id: string]: IFolderResponse } = {};

  inputData.forEach((folder) => {
    folder.children = [];
    folderMap[folder.id] = folder;

    if (folder.folderId) {
      if (folderMap[folder.folderId]) {
        // @ts-ignore
        folderMap[folder.folderId]?.children.push(folder);
      }
    } else {
      topLevelFolders.push(folder);
    }
  });

  return topLevelFolders;
};
