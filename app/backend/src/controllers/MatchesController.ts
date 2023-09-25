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
}

export default MatchesController;
