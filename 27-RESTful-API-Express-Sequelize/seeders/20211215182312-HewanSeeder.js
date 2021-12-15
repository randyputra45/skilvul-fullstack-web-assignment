"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Hewan", [
      {
        nama: "Melly",
        namaSpesies: "kucing",
        umur: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Pally",
        namaSpesies: "kucing",
        umur: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Hewan", null, {});
  },
};
