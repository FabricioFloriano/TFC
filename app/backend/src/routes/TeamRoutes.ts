import { Request, Response, Router } from 'express';
import TeamController from '../controllers/TeamController';

const teamController = new TeamController();

const teamsRouter = Router();

teamsRouter.get('/', (req: Request, res: Response) => teamController.findAll(req, res));
teamsRouter.get('/:id', (req: Request, res: Response) => teamController.findById(req, res));

export default teamsRouter;
