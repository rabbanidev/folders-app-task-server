import { Types } from 'mongoose';

export type IFolderStructure = {
  folderName: string;
  folderId?: Types.ObjectId | IFolderStructure;
};

export type IFolderResponse = {
  id: string;
  folderName: string;
  folderId?: string;
  children?: IFolderResponse[];
};
