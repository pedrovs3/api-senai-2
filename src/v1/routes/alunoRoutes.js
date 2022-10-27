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
import idExists from '../middlewares/idExist';

const routes = Router();
routes.get('/', alunoController.index);
routes.get('/:id', idExists, alunoController.show);
routes.post('/', headContent, bodyContent, idExists, alunoController.store);
routes.put('/:id', headContent, bodyContent, idExists, alunoController.update);
routes.delete('/:id', idExists, alunoController.delete);

export default routes;
