import { Router } from 'express';
import UserController from '../controllers/UserController';
import validateUser from '../middlewares/validateUser'
const routes = new Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.get('/users/:id', UserController.show);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

export default routes;
