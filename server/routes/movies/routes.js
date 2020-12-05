const Movies = require('./model');

const route = '/api/movies';

const getByFilters = async (req, res) => {
  const { title, star } = req.query;

  const filters = {};

  if (title) {
    filters.title = title;
  }

  if (star) {
    filters.stars = star;
  }

  const result = await Movies.find(filters);

  res.json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const filters = {
    _id: id,
  };

  const result = await Movies.findOne(filters);

  res.json(result);
};

const remove = async (req, res) => {
  const { id } = req.params;

  const filters = {
    _id: id,
  };

  const result = await Movies.remove(filters);

  res.json(result);
};

const create = async (req, res) => {
  const {
    title,
    releaseYear,
    stars,
    format,
  } = req.body;

  const data = {
    title,
    releaseYear,
    stars,
    format,
  };

  const instance = new Movies(data);

  const result = await instance.save();

  res.json(result);
};

const routes = [
  {
    route,
    method: 'post',
    fn: create,
  },
  {
    route,
    method: 'get',
    fn: getByFilters,
  },
  {
    route: `${route}/:id`,
    method: 'get',
    fn: getById,
  },
  {
    route: `${route}/:id`,
    method: 'delete',
    fn: remove,
  },
  {
    route: `${route}/:id`,
    method: 'delete',
    fn: remove,
  },
];

module.exports = routes;
