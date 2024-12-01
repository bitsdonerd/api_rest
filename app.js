import express from 'express';
import homeR from './src/routes/homeR';

// Iniciando o app
class App {
  constructor(){
    this.app = express();
    this.middlewares();
    this.routes();
  }

  // Metódo para os middlewares
  middlewares(){
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  // Metódo para as routes
  routes(){
    this.app.use('/', homeR);
  }

}

export default new App().app;




