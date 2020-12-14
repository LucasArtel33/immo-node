'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Types', [
      {
        type:'Appartement',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type:'Maison',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type:'Terrain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type:'Parking/box',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type:'Chateau',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type:'Batiment',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type:'Immeuble',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type:'Autre',
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
    return queryInterface.bulkDelete( 'Types', null, {})

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
