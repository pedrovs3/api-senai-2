/**
 * Objetivo: Arquivo responsavel pelas rotas (endpoint) das fotos de alunos.
 * Autor: Pedro Vieira
 * data_criacao: 24/10/2022
 * versao: 1.0.0
 */

import { Router } from 'express';
import photoController from '../controllers/PhotoController';

const routes = Router();

routes.post('/:id', photoController.store);

export default routes;
