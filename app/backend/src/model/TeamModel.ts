import TeamsModel from '../database/models/TeamsModel';
import ITeams from '../Interfaces/ITeams';
import ITeamsModel from '../Interfaces/ITeamsModel';

class TeamModel implements ITeamsModel {
  private model = TeamsModel;

  public async findAll(): Promise<ITeams[]> {
    const teams = await this.model.findAll();
    return teams;
  }
}

export default TeamModel;
