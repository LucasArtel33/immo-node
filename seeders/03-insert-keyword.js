
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Keywords', [
      {
        keyword:'Coup de coeur',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        keyword:'Bien exceptionnel',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        keyword:'Vue de reve',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        keyword:'Emplacement privilégié',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        keyword:'Proche commerces',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        keyword:'Proche école',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
