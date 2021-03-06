import Post from '../models/post';

export default async (request, response, next) => {
  const { id } = request.params;

  if (await Post.findByPk(id)) {
    next();
  } else {
    return response.status(400).json({ error: "Post not found" })
  }
};