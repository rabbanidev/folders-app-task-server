import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IFolderResponse, IFolderStructure } from './folderStructure.interface';
import FolderStructure from './folderStructure.model';
import { transformData } from './folderStructure.utils';

const createFolder = async (payload: IFolderStructure) => {
  const result = await FolderStructure.create(payload);
  return result;
};

const getAllFolders = async () => {
  const folders = await FolderStructure.find();
  const data = folders.map((folder) => ({
    id: folder._id,
    folderId: folder?.folderId ? folder.folderId.toString() : '',
    folderName: folder.folderName,
    children: [],
  }));

  const result = transformData(data as unknown as IFolderResponse[]);
  return result;
};

const getFolder = async (id: string) => {
  const result = await FolderStructure.findById(id);
  return result;
};

const deleteFolder = async (id: string) => {
  const exitFolder = await FolderStructure.findById(id);

  if (!exitFolder) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Folder not found!');
  } else if (exitFolder.folderName === 'Root') {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Root Folder does not delete!');
  }

  const result = await FolderStructure.findByIdAndDelete(id);
  return result;
};

export const FolderStructureService = {
  createFolder,
  getAllFolders,
  getFolder,
  deleteFolder,
};
