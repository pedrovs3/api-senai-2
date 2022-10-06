import { Router } from 'express';
import homeController from '../controllers/HomeController';

const routes = Router();

routes.get('/', homeController.index);
routes.get('/:id', homeController.show);
routes.post('/', homeController.store);
routes.put('/:id', homeController.update);
routes.delete('/:id', homeController.delete);

export default routes;
