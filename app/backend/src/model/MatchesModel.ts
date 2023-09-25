import IMatches from '../Interfaces/IMatches';
import IMatchesModel from '../Interfaces/IMatchesModel';
import Matches from '../database/models/Matchers';
import TeamsModel from '../database/models/TeamsModel';

export default class MatchesModel implements IMatchesModel {
  private model = Matches;

  async findAll(): Promise<IMatches[]> {
    const matches = await this.model.findAll({
      include: [
        {
          model: TeamsModel,
          as: 'homeTeam',
          attributes: { exclude: ['id'] },
        },
        {
          model: TeamsModel,
          as: 'awayTeam',
          attributes: { exclude: ['id'] },
        },
      ],
    });
    return matches;
  }

  public async finishMatch(id: number): Promise<boolean> {
    await this.model.update({ inProgress: false }, { where: { id } });
    return true;
  }
}
