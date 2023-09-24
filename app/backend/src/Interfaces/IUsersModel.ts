import IUsers from './IUsers';

export interface IUsersModel {
  findOne(email: string): Promise<IUsers | null>;
}

export default IUsersModel;
