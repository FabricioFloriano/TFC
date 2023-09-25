import IMatches from './IMatches';

interface IMatchesModel {
  findAll(): Promise<IMatches[]>,
  finishMatch(id: number): Promise<boolean>;
  updateMatch(id: number, homeTeam: number, awayTeam: number): Promise<boolean>;
  createMatch(homeTeamId: number,
    awayTeamId: number, homeTeamGoals: number, awayTeamGoals: number): Promise<IMatches>;
}

export default IMatchesModel;
