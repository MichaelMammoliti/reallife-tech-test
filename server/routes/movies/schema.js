const mongoose = require('mongoose');

const schema = {
  title: String,
  releaseYear: String,
  format: String,
  stars: [String],
};

module.exports = new mongoose.Schema(schema);
