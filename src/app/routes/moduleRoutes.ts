import { IRoute } from '../../interfaces/route';
import { FolderStructureRoutes } from '../modules/folderStructure/folderStructure.route';

const modulesRoutes: IRoute[] = [
  {
    path: '/folder-structures',
    route: FolderStructureRoutes,
  },
];

export default modulesRoutes;
