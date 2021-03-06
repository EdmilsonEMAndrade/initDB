import Post from '../models/post'
import sequelize from 'sequelize';

class PostController {
  async index(request, response) {
    let { limit, offset, filter } = request.query;
    if (!filter) {
      filter = 'id';
    }
    return response.json(await Post.findAll({
      order: sequelize.col(`${filter}`),
      offset,
      limit,
    }));
  }

  async show(request, response) {
    const { id } = request.params;

    return response.json(await Post.findByPk(id));
  }

  async store(request, response) {
    const { content, users_id } = request.body;
    const result = await Post.create({ content, users_id });

    return response.json(result);
  }

  async update(request, response) {
    const { id } = request.params;
    const { content, users_id } = request.body;

    const result = await Post.update(
      {
        content,
        users_id,
      },
      {
        where: {
          id,
        },
        returning: true,
      },

    );

    return response.json(result);
  }

  async delete(request, response) {
    const { id } = request.params;
    await Post.destroy({
      where: {
        id,
      },
    });

    return response.sendStatus(202);
  }
}

export default new PostController();