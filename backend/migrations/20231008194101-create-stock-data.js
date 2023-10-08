// E:\programming\Project\ph-predictor\backend\migrations\20231008194101-create-stock-data.js

'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StockData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      open_price: {
        type: Sequelize.DECIMAL
      },
      high_price: {
        type: Sequelize.DECIMAL
      },
      low_price: {
        type: Sequelize.DECIMAL
      },
      close_price: {
        type: Sequelize.DECIMAL
      },
      volume: {
        type: Sequelize.INTEGER
      },
      adjusted_close: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('StockData');
  }
};