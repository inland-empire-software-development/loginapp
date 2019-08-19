// Dependencies
// ========================
const express = require('express');
const mongoose = require('mongoose');

// Import the axios library, to make HTTP requests
const axios = require('axios');

// This is the client ID and client secret that you obtained
// while registering the application
const clientID = 'dd87eb0d1732bf5e0f5b';
const clientSecret = 'dbc2511afcb0be42b2242213c8eca0074498c6a4';


// Sets up the express app
// ========================
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static(__dirname + '/public'));


// Routes
// ========================
require('./routes/html-routes.js')(app);


// Starting express app
// ========================
app.listen(PORT, async () => {
  console.log('Server Ready!');
  const mongoConnection = await mongoose.connect('mongodb://localhost/sampledb', {useCreateIndex: true, useNewUrlParser: true});
  console.log('Database Ready!');

  console.log(`Server is running on port ${PORT}`);
});