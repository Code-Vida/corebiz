'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
  {
    return queryInterface.createTable('Product', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING(80),
        allowNull: false,
      },
      urlImage: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      valor: {
        type: Sequelize.DECIMAL(6, 2),
        allowNull: false,
      },
    })
  },

  down: (queryInterface) =>
  {
    return queryInterface.dropTable('Product');
  }
};
