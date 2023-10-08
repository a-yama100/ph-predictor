// E:\programming\Project\ph-predictor\backend\models\prediction.js

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prediction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Prediction.init({
    date: DataTypes.DATE,
    predicted_price: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Prediction',
  });
  return Prediction;
};