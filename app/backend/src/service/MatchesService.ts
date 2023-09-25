import IMatches from '../Interfaces/IMatches';
import MatchesModel from '../model/MatchesModel';
import IMatchesModel from '../Interfaces/IMatchesModel';

class MatchesService {
  constructor(private matchesModel: IMatchesModel = new MatchesModel()) {}

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

  public async updateMatch(id: number, homeTeam: number, awayTeam: number): Promise<boolean> {
    await this.matchesModel.updateMatch(id, homeTeam, awayTeam);
    return true;
  }
}

export default MatchesService;
