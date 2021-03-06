module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      {
        tableName: 'users',
        schema: 'homework',
      },
      [
        {
          name: 'Fulano',
          email: 'fulano@email.com',

        },
        {
          name: 'Beltrano',
          email: 'beltrabo@email.com',

        },
      ],
      {}
    );
  },
  down: async queryInterface => {
    await queryInterface.bulkDelete(
      {
        tableName: 'users',
        schema: 'homework',
      },
      null,
      {}
    );
  },
};
