const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema(
  {
    id:          Number,
    alt:         String,
    src:         String,
    description: String,
    url:         String
  }
);

module.exports = mongoose.model('Destination', destinationSchema);
