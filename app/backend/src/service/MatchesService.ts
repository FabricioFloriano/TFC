import IMatches from '../Interfaces/IMatches';
import MatchesModel from '../model/MatchesModel';
import IMatchesModel from '../Interfaces/IMatchesModel';

class MatchesService {
  constructor(private matchesModel: IMatchesModel = new MatchesModel()) {}

  public async findAll(): Promise<IMatches[]> {
    const allMatches = await this.matchesModel.findAll();
    return allMatches;
  }
}

export default MatchesService;
