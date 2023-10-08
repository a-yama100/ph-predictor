// E:\programming\Project\ph-predictor\backend\models\stockdata.js

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StockData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StockData.init({
    date: DataTypes.DATE,
    open_price: DataTypes.DECIMAL,
    high_price: DataTypes.DECIMAL,
    low_price: DataTypes.DECIMAL,
    close_price: DataTypes.DECIMAL,
    volume: DataTypes.INTEGER,
    adjusted_close: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'StockData',
  });
  return StockData;
};