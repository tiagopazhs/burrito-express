import { Sequelize, Model, DataTypes } from 'sequelize';
import databaseConfig from '../config/database';

const sequelize = new Sequelize(databaseConfig);

class OrderItemModel extends Model {
  public orderId!: string;
  public itemOrder!: number;
  public itemName!: string;
  public itemValue!: number;
  public totalItemValue!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

OrderItemModel.init({
  orderId: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  itemOrder: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  itemName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  itemValue: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  totalItemValue: {
    type: DataTypes.FLOAT,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'OrderItemModel',
  tableName: 'OrderItemTable',
});

export default OrderItemModel;
