import express from 'express';
import { FolderStructureController } from './folderStructure.controller';

const router = express.Router();

router.post('/create', FolderStructureController.createFolder);

router.delete('/delete/:id', FolderStructureController.deleteFolder);

router.get('/', FolderStructureController.getAllFolders);
router.get('/:id', FolderStructureController.getFolder);

export const FolderStructureRoutes = router;
