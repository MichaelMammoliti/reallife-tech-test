const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

require('./mongoose');

const middlewares = require('./middlewares');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

middlewares.forEach((middleware) => {
  app.use(middleware);
});

routes.forEach(({ route, method, middleware, fn }) => {
  app[method](route, ...[middleware, fn].filter(Boolean));
});

app.use(express.static(path.join(__dirname, '../dist')));

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});

module.exports = app;
