import { Router } from 'express';
import teamsRouter from './TeamRoutes';
import UserRouter from './UserRoutes';
import matchesRouter from './MatchesRoutes';

const router = Router();

router.use('/teams', teamsRouter);
router.use('/login', UserRouter);
router.use('/matches', matchesRouter);

export default router;
