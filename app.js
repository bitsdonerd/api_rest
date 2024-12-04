import dotenv from 'dotenv';
import express from 'express';
import homeR from './src/routes/homeR';
import userR from './src/routes/userR'
import './src/database';

dotenv.config();

// Iniciando o app
class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  // Metódo para os middlewares
  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  // Metódo para as routes
  routes() {
    this.app.use('/', homeR);
    this.app.use('/users/', userR);
  }

}

export default new App().app;
