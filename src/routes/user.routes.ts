import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { ensureAuthenticated } from '../handlers/ensureAuthenticated';

const userRoutes = Router();

const usersController = new UserController();

userRoutes.post('/users', usersController.post);

userRoutes.get('/users', ensureAuthenticated, (req, res) => {
  return res.json({ uhul: true });
});

export { userRoutes };
