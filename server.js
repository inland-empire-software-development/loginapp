// Dependencies
// ========================
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const key = require('./config/keys');

// Sets up the Express app
// ========================
const app = express();
const PORT = process.env.PORT || 8080;
const mongoURI = key.mongoURI;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static(__dirname + '/public'));


// Routes
// ========================
require('./routes/auth-github.js')(app);
require('./routes/html-routes.js')(app);

// Starting Express app
// ========================
app.listen(PORT, () => {
  mongoose.connect(mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true
  }, err => {
    if(err) console.log(err);
  })
  .then(() => {
    console.log('Database Ready!');
  });

  console.log('Server Ready!');
  console.log(`Server is running on port ${PORT}`);
});