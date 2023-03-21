import { Sequelize, Model, DataTypes } from 'sequelize';
import databaseConfig from '../config/database';

const sequelize = new Sequelize(databaseConfig);

class OrderModel extends Model {
  public orderId!: number;
  public totalOrderQty!: number;
  public totalOrderValue!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

OrderModel.init({
  orderId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  totalOrderQty: {
    type: DataTypes.INTEGER,
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