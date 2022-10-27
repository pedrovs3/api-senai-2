/**
 * Objetivo: Arquivo responsavel pelas rotas (endpoint) das fotos de alunos.
 * Autor: Pedro Vieira
 * data_criacao: 24/10/2022
 * versao: 1.0.0
 */

import { Router } from 'express';
import photoController from '../controllers/PhotoController';
import idExist from '../middlewares/idExist';

const routes = Router();

routes.post('/:id', idExist, photoController.store);

export default routes;
