const mongoose = require('mongoose');
const moviesSchema = require('./schema');

module.exports = mongoose.model('Movies', moviesSchema);
