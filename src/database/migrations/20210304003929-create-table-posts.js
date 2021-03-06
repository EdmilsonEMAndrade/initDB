module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'posts',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        content: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        users_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'users',
            key: 'id',
          },
        },
        created_at: { type: Sequelize.DATE, allowNull: false },
        updated_at: { type: Sequelize.DATE, allowNull: false },

      },
      {
        tableName: 'posts',
        schema: 'homework',
      }
    );
  },

  down: async queryInterface => {
    await queryInterface.dropTable('posts');
  },
};
