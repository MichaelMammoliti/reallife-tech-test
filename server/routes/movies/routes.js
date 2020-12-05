const multer = require('multer');
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

  const result = await Movies.find(filters).sort({ title: 'asc' });

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

const searchBy = async (req, res) => {
  const { title, star } = req.query;

  const filters = {};

  if (star) {
    filters.stars = {
      $regex: star,
      $options: 'i',
    };
  }

  if (title) {
    filters.title = {
      $regex: title,
      $options: 'i',
    };
  }

  const result = await Movies.find(filters).sort({ title: 'asc' });

  res.json(result);
};

const upload = async (req, res) => {
  console.log(req.file, req.body);

  // const result = await Movies.insertMany(data).sort({ title: 'asc' });

  // res.json(result);
};

const multerUpload = multer({ dest: './uploads' });

const routes = [
  {
    route: `${route}/search`,
    method: 'get',
    fn: searchBy,
  },
  {
    route: `${route}/upload`,
    method: 'post',
    middleware: multerUpload.single('file'),
    fn: upload,
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
    route,
    method: 'post',
    fn: create,
  },
  {
    route,
    method: 'get',
    fn: getByFilters,
  },
];

module.exports = routes;
