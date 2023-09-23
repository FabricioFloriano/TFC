import ITeams from './ITeams';

interface ITeamsModel {
  findAll(): Promise<ITeams[]>;
}

export default ITeamsModel;
