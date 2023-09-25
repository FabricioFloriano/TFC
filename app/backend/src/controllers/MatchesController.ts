import { Request, Response } from 'express';
import MatchesService from '../service/MatchesService';

class MatchesController {
  constructor(
    private matchesService = new MatchesService(),
  ) {}

  public async findAll(_req: Request, res: Response) {
    const allMatches = await this.matchesService.findAll();
    return res.status(200).json(allMatches);
  }
}

export default MatchesController;
