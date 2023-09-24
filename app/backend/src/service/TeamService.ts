import TeamsModel from '../model/TeamModel';
import ITeamsModel from '../Interfaces/ITeamsModel';
import ITeams from '../Interfaces/ITeams';

export default class TeamService {
  constructor(
    private teamModel: ITeamsModel = new TeamsModel(),
  ) {}

  public async findAll(): Promise<ITeams[]> {
    const teams = await this.teamModel.findAll();
    return teams;
  }

  public async findById(id: ITeams['id']): Promise<ITeams | null> {
    const team = await this.teamModel.findById(id);
    return team;
  }
}
