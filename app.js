/**
 * Objetivo: Api responsavel pela manipulaçao do back (CRUD)
 * Autor: Pedro Vieira
 * data_criacao: 10/10/2022
 * versao: 1.0.0
 */

import express from 'express';
import cors from 'cors';
import alunoRoutes from './src/routes/alunoRoutes';
import corsMiddleware from './src/middlewares/corsMiddleware';
import headContent from './src/middlewares/headersContent';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(headContent);
    this.app.use(corsMiddleware);
    this.app.use(cors());
  }

  routes() {
    this.app.use('/student/', alunoRoutes);
  }
}

export default new App().app;
