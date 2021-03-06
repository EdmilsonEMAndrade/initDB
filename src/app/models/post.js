import Sequelize, { Model } from 'sequelize';

class Post extends Model {
  static init(sequelize) {
    super.init(
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
          allowNull: false,
          references: {
            model: 'users',
            key: 'id',
          },
        },

      },
      {
        sequelize,
        schema: 'homework',
        tableName: 'posts',
      }
    );

    return this;
  }
  static associate(models) {
    this.belongsTo((models.User), {
      as: 'user',
      foreignKey: "id"
    })
  }
}

export default Post;