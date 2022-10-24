/**
 * Objetivo: Api responsavel pela manipulaçao do back (CRUD)
 * Autor: Pedro Vieira
 * data_criacao: 10/10/2022
 * versao: 1.0.0
 */

import express from 'express';
import cors from 'cors';
import alunoRoutes from './routes/alunoRoutes';
import corsMiddleware from './middlewares/corsMiddleware';
import idRequired from './middlewares/idRequired';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(corsMiddleware);
    this.app.use(cors());
  }

  routes() {
    this.app.use('/student/', alunoRoutes);

    // Error route for id empty
    this.app.use('*/:id', idRequired);
  }
}

export default new App().app;
