import User from '../models/user'
import Post from '../models/post'
import sequelize from 'sequelize';



class UserController {
  async index(request, response) {
    let { limit, offset, filter } = request.query;
    if (!filter) {
      filter = 'id';
    }

    return response.json(await User.findAll({
      order: sequelize.col(`${filter}`),
      offset,
      limit,
    }));
  }

  async show(request, response) {
    const { id } = request.params;

    return response.json(await User.findByPk(id));
  }

  async store(request, response) {
    const { name, email } = request.body;

    /*const dataUser = User.build({ name, email });
    await dataUser.save()*/
    const dataUser = await User.create({ name, email })
    return response.json(dataUser);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, email } = request.body;

    const userData = await User.update(
      { name, email },
      {
        where: {
          id,
        },
        returning: true,
      }
    );

    // const userData = await User.findByPk(id);
    // if (name) {
    //   userData.name = name;
    // };
    // if (email) {
    //   userData.email = email;
    // };
    // userData.save()
    return response.json(userData);
  }

  async delete(request, response) {
    const { id } = request.params;
    /*const userData = await User.findByPk(id);
    await userData.destroy()*/

    await Post.destroy({
      where: {
        users_id: id
      }
    })

    await User.destroy({
      where: {
        id,
      },
    });


    return response.sendStatus(202);
  }
}

export default new UserController();
