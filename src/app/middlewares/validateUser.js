import User from '../models/user';

export default async (request, response, next) => {
  const { id } = request.params;

  if (await User.findByPk(id)) {
    next();
  } else {
    return response.status(400).json({ error: "User not found" })
  }
};