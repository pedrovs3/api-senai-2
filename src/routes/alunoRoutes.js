import { Router } from 'express';
import alunoController from '../controllers/AlunoController';

const routes = Router();

routes.get('/', alunoController.index);
routes.get('/:id', alunoController.show);
routes.post('/', alunoController.store);
routes.put('/:id', alunoController.update);
routes.delete('/:id', alunoController.delete);

export default routes;
