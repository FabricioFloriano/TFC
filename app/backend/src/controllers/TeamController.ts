import { Request, Response } from 'express';
import TeamService from '../service/TeamService';

class TeamController {
  constructor(
    private teamsService = new TeamService(),
  ) {}

  public async findAll(_req: Request, res: Response): Promise<Response> {
    const teams = await this.teamsService.findAll();
    return res.status(200).json(teams);
  }

  public async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const team = await this.teamsService.findById(+id);
    return res.status(200).json(team);
  }
}

export default TeamController;
