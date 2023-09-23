import { Router } from 'express';
import teamsRouter from './TeamRoutes';

const router = Router();

router.use('/teams', teamsRouter);

export default router;
