const express = require('express');
const bodyParser = require('body-parser');

const middlewares = require('./middlewares');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

middlewares.forEach((middleware) => {
  app.use(middleware);
});

app.get('/api/movie', (req, res) => {
  res.json({
    a: true,
  });
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});
