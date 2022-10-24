/**
 * Objetivo: Arquivo responsavel pelas rotas (endpoint) dos alunos.
 * Autor: Pedro Vieira
 * data_criacao: 10/10/2022
 * versao: 1.0.0
 */

import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
import bodyContent from '../middlewares/bodyContent';
import headContent from '../middlewares/headersContent';

const routes = Router();

routes.get('/', alunoController.index);
routes.get('/:id', alunoController.show);
routes.post('/', headContent, bodyContent, alunoController.store);
routes.put('/:id', headContent, bodyContent, alunoController.update);
routes.delete('/:id', alunoController.delete);

export default routes;
