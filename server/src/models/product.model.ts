import { Sequelize, Model, DataTypes } from 'sequelize';
import databaseConfig from '../config/database';

const sequelize = new Sequelize(databaseConfig);

class ProductModel extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
  public price!: number;
  public category!: string;
  public imageURL!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

ProductModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageURL: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'ProductModel',
  tableName: 'ProductTable',
});

export default ProductModel;

