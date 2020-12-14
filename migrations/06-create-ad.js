
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      location: {
        type: Sequelize.STRING
      },
      room: {
        type: Sequelize.INTEGER
      },
      desc: {
        type: Sequelize.TEXT
      },
      picture: {
        type: Sequelize.STRING
      },
      typeId:{
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Types',
          key: 'id'
        }
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ads');
  }
};