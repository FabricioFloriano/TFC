import ITeams from './ITeams';

interface ITeamsModel {
  findAll(): Promise<ITeams[]>;
  findById(id: ITeams['id']): Promise<ITeams | null>
}

export default ITeamsModel;
