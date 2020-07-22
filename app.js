// import modules
const path = require('path');
const express = require('express');
const moment = require('moment');
// Custom module paths start with './' -> current directory 
// const destinations = require('./seeds/destinations');

// const mongoose = require('mongoose');
// const dotenv = require('dotenv').config();

// const Destination = require('./models/destination.js')

// // import mangoose

// // Hide creds from repo
// const mongoDB = process.env.MONGODB_URL;

// // Set up default mongoose connection
// mongoose.connect(mongoDB, { useUnifiedTopology: true,useNewUrlParser: true });

// // Get the default connection
// const db = mongoose.connection;

// // Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// // Set a callback to let us know we've successfully connected
// db.once('open', function() {
//   console.log('Connected to DB...');
// });


// create express app
const app = express();
app.set('view engine', 'ejs');

// automatically check if requested file is found in /public
// if yes, return that file as a response to the browser
app.use(express.static(path.join(__dirname, 'public')));

// sets the current year in footer section using moment module 
app.use('/',function(req, res, next){
  res.locals.currentYear = moment().format('YYYY'); 
  next();
});

// Display an image gallery when someone visits the home page
app.get('/', function(request, response){
  response.render('index',{'title': 'Travel Experts'});
})

app.get('/login', function(request, response){
  response.render('login',{'title': 'Login'});
})

app.get('/register', function(request, response){
  response.render('register',{'title': 'Sign Up'});
})

// // Display an individual detination page when someone browses to an ID
// https://expressjs.com/en/api.html#req.params
// app.get('/:id', function(request, response){

//   // Find the specific animal in our module using array.find()
//   // https://stackoverflow.com/questions/7364150/find-object-by-id-in-an-array-of-javascript-objects
//   Destination.findOne({'id': request.params.id}, function(error, destination) {
  
//     // Check for IDs that are not in our list
//     if (!destination) {
//       return response.send('Invalid ID.');
//     }

//   // We now pass our animal object into our view (the 2nd object must be an object)
//   response.render('single-destination',destination);
//   });
// })

// app.get('/api/destinations', function(request, response){
//   Destination.find(function(error, destinations) { 
//     response.json(destinations);
//   });
// })





// if no file or endpoint found, send a 404 error as a response to the browser
app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

// start up server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});