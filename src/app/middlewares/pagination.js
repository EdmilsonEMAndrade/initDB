export default (request, response, next) => {
  const { method, url, params, query, ip } = request;
  if (method == "GET") {
    const { limit, offset, filter } = request.query;
    if (!filter) {
      console.log('filtre = null')
      // request.query.filter = 'id';
    }
  }

  next();
};