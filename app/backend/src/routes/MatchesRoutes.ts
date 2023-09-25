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
router.patch('/:id', Validate.validateToken, (req: Request, res: Response) =>
  matchesController.updateMatch(req, res));
router.post('/', Validate.validateToken, (req: Request, res: Response) =>
  matchesController.createMatch(req, res));

export default router;
