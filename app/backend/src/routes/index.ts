import { Router } from 'express';
import teamsRouter from './TeamRoutes';
import UserRouter from './UserRoutes';

const router = Router();

router.use('/teams', teamsRouter);
router.use('/login', UserRouter);

export default router;
