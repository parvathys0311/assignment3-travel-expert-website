const mongoose = require('mongoose');

// Define our Schema

const destinationSchema = new mongoose.Schema(
  {
    id:          Number,
    alt:         String,
    src:         String,
    description: String,
    url:         String
  }
);

// Compile and export model using the above Schema.
module.exports = mongoose.model('Destination', destinationSchema);
