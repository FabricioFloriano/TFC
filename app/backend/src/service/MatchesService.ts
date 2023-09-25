import IMatches from '../Interfaces/IMatches';
import MatchesModel from '../model/MatchesModel';
import IMatchesModel from '../Interfaces/IMatchesModel';
import TeamModel from '../model/TeamModel';
import ITeamsModel from '../Interfaces/ITeamsModel';

class MatchesService {
  constructor(
    private matchesModel: IMatchesModel = new MatchesModel(),
    private teamModel: ITeamsModel = new TeamModel(),
  ) {}

  public async findAll(inProgress: string): Promise<IMatches[]> {
    const allMatches = await this.matchesModel.findAll();
    if (!inProgress) {
      return allMatches;
    }

    if (inProgress === 'true') {
      return allMatches.filter((match) => match.inProgress === true);
    }

    return allMatches.filter((match) => match.inProgress === false);
    return allMatches;
  }

  public async finishMatch(id: number): Promise<boolean> {
    await this.matchesModel.finishMatch(id);
    return true;
  }

  public async updateMatch(
    id: number,
    homeTeam: number,
    awayTeam: number,
  ): Promise<boolean> {
    await this.matchesModel.updateMatch(id, homeTeam, awayTeam);
    return true;
  }

  public async createMatch(
    homeTeamId: number,
    awayTeamId: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ): Promise<{ status: number; data: { message: string } | IMatches }> {
    const homeTeam = await this.teamModel.findById(homeTeamId);
    const awayTeam = await this.teamModel.findById(awayTeamId);

    if (!homeTeam || !awayTeam) {
      return { status: 404, data: { message: 'There is no team with such id!' } };
    }

    const match = await this.matchesModel.createMatch(
      homeTeamId,
      awayTeamId,
      homeTeamGoals,
      awayTeamGoals,
    );
    return { status: 201, data: match };
  }
}

export default MatchesService;
