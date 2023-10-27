import { RequestHandler } from 'express';
import { FolderStructureService } from './folderStructure.service';
import httpStatus from 'http-status';

const createFolder: RequestHandler = async (req, res, next) => {
  try {
    const result = await FolderStructureService.createFolder(req.body);

    res.status(httpStatus.CREATED).send({
      status: httpStatus.CREATED,
      message: 'Folder created successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllFolders: RequestHandler = async (req, res, next) => {
  try {
    const result = await FolderStructureService.getAllFolders();

    res.status(200).send({
      status: httpStatus.OK,
      message: 'Folders fetched successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getFolder: RequestHandler = async (req, res, next) => {
  try {
    const result = await FolderStructureService.getFolder(req.params.id);

    res.status(200).send({
      status: httpStatus.OK,
      message: 'Folder fetched successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteFolder: RequestHandler = async (req, res, next) => {
  try {
    const result = await FolderStructureService.deleteFolder(req.params.id);

    res.status(200).send({
      status: httpStatus.OK,
      message: 'Folder deleted successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const FolderStructureController = {
  createFolder,
  getAllFolders,
  getFolder,
  deleteFolder,
};
