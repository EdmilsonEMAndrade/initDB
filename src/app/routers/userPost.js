import { Router } from 'express';
import UserPostController from '../controllers/UserPostController';

const routes = new Router();

routes.get('/userpost/:id', UserPostController.index);


export default routes;