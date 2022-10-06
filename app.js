import express from 'express';
import cors from 'cors';
import aulaRoutes from './src/routes/alunoRoutes';
import corsMiddleware from './src/middlewares/corsMiddleware';

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
    this.app.use('/', aulaRoutes);
  }
}

export default new App().app;
