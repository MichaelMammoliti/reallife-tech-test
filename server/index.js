const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

require('./mongoose');

const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes.forEach(({ route, method, fn }) => {
  app[method](route, fn);
});

app.use(express.static(path.join(__dirname, '../dist')));

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});

module.exports = app;
