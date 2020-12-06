const multer = require('multer');
const { camelCase } = require('change-case');
const fs = require('fs');

const txtToJs = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(err);
    }

    const obj = data.toString().split('\r\n').reduce((acc, item) => {
      const [key, value] = item.split(':');
      const newKey = camelCase(key);
      const currentObj = acc[acc.length - 1];

      if (!key || !value) {
        return acc;
      }

      if (currentObj[newKey]) {
        acc.push({});
      }

      currentObj[newKey] = value.trim();

      return acc;
    }, [{}]);

    resolve(obj);
  });
});

const multerUpload = multer({ dest: './uploads' }).single('file');

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

const upload = (req, res) => {
  multerUpload(req, res, async (err) => {
    if (!err) {
      const data = await txtToJs(req.file.path);
      const response = await Movies.insertMany(data);
      res.json(response);
    }
  });
};

const routes = [
  {
    route: `${route}/search`,
    method: 'get',
    fn: searchBy,
  },
  {
    route: `${route}/upload`,
    method: 'post',
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
