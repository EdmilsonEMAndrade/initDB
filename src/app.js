import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routers from './app/routers';
import middlewares from './app/middlewares';
import validateUser from './app/middlewares/validateUser';
import validatePost from './app/middlewares/validatePost'
import './database';

class App {
  constructor() {
    this.server = express();
    this.config();
    this.middlewares();
    this.routers();
  }

  config() {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: false }));
    this.server.use(cors());

    dotenv.config({
      path: './../.env',
    });
  }

  middlewares() {
    this.server.use(middlewares);
    this.server.use('/users/:id', validateUser)
    this.server.use('/userpost/:id', validateUser)
    this.server.use('/posts/:id', validatePost)
  }

  routers() {
    this.server.use(routers);
  }
}

export default new App().server;
