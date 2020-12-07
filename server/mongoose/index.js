const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('error', () => console.log('error connecting'));
mongoose.connection.once('open', () => console.log('connected to database'));
