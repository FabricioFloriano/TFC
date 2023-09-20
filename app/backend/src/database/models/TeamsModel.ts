import { DataTypes, Model } from 'sequelize';
import db from '.';

class TeamsModel extends Model {
  public id!: number;
  public teamName!: string;
}

TeamsModel.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  teamName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'teams',
  timestamps: false,
});

export default TeamsModel;
