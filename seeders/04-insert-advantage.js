'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Advantages', [
      {
        advantage:'Jardin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        advantage:'Balcon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        advantage:'Piscine',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        advantage:'Terrasse',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        advantage:'Patio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        advantage:'Cheminée',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        advantage:'Ascenseur',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        advantage:'Sous Sol',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        advantage:'Cave',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        advantage:'Rez-de-chaussée',
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
    return queryInterface.bulkDelete('Advantages', null, {})

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
