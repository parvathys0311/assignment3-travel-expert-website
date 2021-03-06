// import modules
const path = require('path');
const express = require('express');
const moment = require('moment');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const Destination = require('./models/destination.js')

// Hide creds from repo
const mongoDB = process.env.MONGODB_URL;

// Set up default mongoose connection
mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Set a callback to let us know we've successfully connected
db.once('open', function () {
  console.log('Connected to DB...');
});


// create express app
const app = express();
app.set('view engine', 'ejs');

// automatically check if requested file is found in /public
// if yes, return that file as a response to the browser
app.use(express.static(path.join(__dirname, 'public')));

// cors origin URL - Allow inbound traffic from origin
corsOptions = {
  origin: "https://dashboard.heroku.com",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));


// sets the current year in footer section using moment module 
app.use('/', function (req, res, next) {
  res.locals.currentYear = moment().format('YYYY');
  next();
});

// Endpoint handlers to render and serve each page template
app.get('/', function (request, response) {
  response.render('index', { 'title': 'Travel Experts' });
})

app.get('/login', function (request, response) {
  response.render('login', { 'title': 'Login' });
})

app.get('/register', function (request, response) {
  response.render('register', { 'title': 'Sign Up' });
})

// Display an individual detination page when someone browses to an ID

app.get('/destinations/:id', function (request, response) {
  // Find the single specific destination in our module
  Destination.findOne({ 'id': request.params.id }, function (error, destination) {

    // Check for IDs that are not in our list
    if (!destination) {
      response.render('404', { 'title': "404" });
    }

    // We now pass our destination object into our view (the 2nd object must be an object)
    response.render('single-destination', destination);
  });
})

// JSON api endpoint
app.get('/api/destinations', function (request, response) {
  Destination.find(function (error, destinations) {
    response.json(destinations);
  });
})


// if no file or endpoint found, send a 404 error as a response to the browser
app.use(function (req, res, next) {
  res.status(404);
  res.render('404', { 'title': "404" });
});

// start up server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});