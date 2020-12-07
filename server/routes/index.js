const movies = require('./movies');

const allRoutes = [
  movies.routes,
];

module.exports = allRoutes.flat();
