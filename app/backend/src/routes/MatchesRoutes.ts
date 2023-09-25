import { Request, Response, Router } from 'express';
import MatchesController from '../controllers/MatchesController';
import Validate from '../middlerwares/validationsLogin';

const matchesController = new MatchesController();

const router = Router();

router.get('/', (req: Request, res: Response) =>
  matchesController.findAll(req, res));
router.patch(
  '/:id/finish',
  Validate.validateToken,
  (req: Request, res: Response) => matchesController.finishMatch(req, res),
);

export default router;
