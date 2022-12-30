export const getQuery = (limit, page) =>
  `limit=${limit}&offset=${page ? page * limit : 0}`;
