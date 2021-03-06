import sequelize from 'sequelize'
import Post from '../models/post'

class UserPostController {
  async index(request, response) {

    const { id } = request.params;

    let { limit, offset, filter } = request.query;
    if (!filter) {
      filter = 'id';
    }

    const postUser = await Post.findAll({

      where: {
        users_id: id,
      },
      returning: true,
      order: sequelize.col(`${filter}`),
      offset,
      limit,
    })
    return response.json(postUser);
  }


}

export default new UserPostController();