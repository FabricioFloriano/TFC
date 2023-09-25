import IMatches from './IMatches';

interface IMatchesModel {
  findAll(): Promise<IMatches[]>,
}

export default IMatchesModel;
