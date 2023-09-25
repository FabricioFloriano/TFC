import { Request, Response } from 'express';
import MatchesService from '../service/MatchesService';

class MatchesController {
  constructor(
    private matchesService = new MatchesService(),
  ) {}

  public async findAll(req: Request, res: Response) {
    const { inProgress } = req.query;
    const allMatches = await this.matchesService.findAll(inProgress as string);
    return res.status(200).json(allMatches);
  }

  public async finishMatch(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    await this.matchesService.finishMatch(+id);
    return res.status(200).json({ message: 'Finished' });
  }

  public async updateMatch(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    await this.matchesService.updateMatch(+id, +homeTeamGoals, +awayTeamGoals);
    return res.status(200).json({ message: 'Updated' });
  }

  public async createMatch(req: Request, res: Response): Promise<Response> {
    const {
      homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals,
    } = req.body;
    const match = await this.matchesService.createMatch(
      Number(homeTeamId),
      Number(awayTeamId),
      Number(homeTeamGoals),
      Number(awayTeamGoals),
    );
    return res.status(match.status).json(match.data);
  }
}

export default MatchesController;
