import { Sequelize, Model, DataTypes } from 'sequelize';
import databaseConfig from '../config/database';

const sequelize = new Sequelize(databaseConfig);

class OrderModel extends Model {
  public orderId!: string;
  public totalOrderQty!: number;
  public totalOrderValue!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

OrderModel.init({
  orderId: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  totalOrderQty: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  totalOrderValue: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'OrderModel',
  tableName: 'OrderTable',
});

export default OrderModel;