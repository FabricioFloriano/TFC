import { Router } from 'express';
import teamsRouter from './TeamRoutes';
import UserRouter from './UserRoutes';
import matchesRouter from './MatchesRoutes';
import leaderBoardRouter from './LeaderBoardRoutes';

const router = Router();

router.use('/teams', teamsRouter);
router.use('/login', UserRouter);
router.use('/matches', matchesRouter);
router.use('/leaderboard', leaderBoardRouter);

export default router;
