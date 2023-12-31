import { Request, Response, Router } from 'express';

import ValidateLogin from '../middlerwares/validationsLogin';
import UserController from '../controllers/UsersController';

const teamController = new UserController();

const router = Router();

router.post(
  '/',
  ValidateLogin.validate,
  (req: Request, res: Response) => teamController.findOne(req, res),
);

router.get(
  '/role',
  ValidateLogin.validateToken,
  (req: Request, res: Response) => teamController.findById(req, res),
);

export default router;
