import { QueryTypes } from 'sequelize';
import BaseService from './BaseService';

export default class UserService extends BaseService {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  async get() {
    const result = await this.execute('select * from homework.users', QueryTypes.SELECT);

    return result
  }

  async getById(id) {
    const result = await this.execute(
      `select * from homework.users where id = ${id}`,
      QueryTypes.SELECT
    );

    return result;
  }

  async create(name, email) {
    const result = await this.execute(
      `insert into homework.users (name, email) 
                        values ('${name}', ${email}) returning *`,
      QueryTypes.INSERT
    );

    return result;
  }

  async update(id, name, email) {
    const result = await this.execute(
      `update homework.users set name = '${name}', 
                        email = ${email}, 
                        updated_at = '${new Date()}'
                        where id = ${id} returning *`,
      QueryTypes.UPDATE
    );

    return result;
  }

  async delete(id) {
    await this.execute(`delete from homework.users where id = ${id}`, QueryTypes.DELETE);
  }
}
