/**
 * Objetivo: Arquivo responsavel pelas rotas (endpoint) dos alunos.
 * Autor: Pedro Vieira
 * data_criacao: 10/10/2022
 * versao: 1.0.0
 */

import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
import bodyContent from '../middlewares/bodyContent';

const routes = Router();

routes.get('/', alunoController.index);
routes.get('/:id', alunoController.show);
routes.post('/', bodyContent, alunoController.store);
routes.put('/:id', bodyContent, alunoController.update);
routes.delete('/:id', alunoController.delete);

export default routes;
