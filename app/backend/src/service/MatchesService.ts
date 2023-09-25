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
}

export default MatchesService;
