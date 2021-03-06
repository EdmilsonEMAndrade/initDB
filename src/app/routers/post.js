import { Router } from 'express';
import PostController from '../controllers/PostController';

const routes = new Router();

routes.get('/posts', PostController.index);
routes.post('/posts', PostController.store);
routes.get('/posts/:id', PostController.show);
routes.put('/posts/:id', PostController.update);
routes.delete('/posts/:id', PostController.delete);

export default routes;