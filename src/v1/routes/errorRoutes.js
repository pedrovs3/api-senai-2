/**
 * Objetivo: Arquivo responsavel pelas rotas (endpoint) dos alunos.
 * Autor: Pedro Vieira
 * data_criacao: 10/10/2022
 * versao: 1.0.0
 */

import { Router } from 'express';
import idRequired from '../middlewares/idRequired';

const routes = Router();

routes.use('/:id', idRequired);

export default routes;
