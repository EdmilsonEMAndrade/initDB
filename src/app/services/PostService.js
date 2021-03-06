import { QueryTypes } from 'sequelize';
import BaseService from './BaseService';

export default class PostService extends BaseService {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  async get() {
    const result = await this.execute('select * from homework.posts', QueryTypes.SELECT);

    return result
  }

  async getById(id) {
    const result = await this.execute(
      `select * from homework.posts where id = ${id}`,
      QueryTypes.SELECT
    );

    return result;
  }

  async create(content, users_id) {
    const result = await this.execute(
      `insert into homework.posts (name, idade, created_at, updated_at) 
                        values ('${content}', ${users_id}, ${new Date()}, ${new Date()}) returning *`,
      QueryTypes.INSERT
    );

    return result;
  }

  async update(id, content, users_id) {
    const result = await this.execute(
      `update homework.posts set content = '${content}', 
                        users_id = ${users_id}, 
                        updated_at = '${new Date()}'
                        where id = ${id} returning *`,
      QueryTypes.UPDATE
    );

    return result;
  }

  async delete(id) {
    await this.execute(`delete from homework.posts where id = ${id}`, QueryTypes.DELETE);
  }
}