// Dependencies
// ========================
const express = require('express');
const mongoose = require('mongoose');


// Sets up the Express app
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
require('./routes/auth-github.js')(app);
require('./routes/html-routes.js')(app);


// Starting Express app
// ========================
app.listen(PORT, async () => {
  console.log('Server Ready!');

  // Connect to Mongo DB 
  const mongoConnection = await mongoose.connect('mongodb://localhost/sampledb', { useCreateIndex: true, useNewUrlParser: true });
  console.log('Database Ready!');

  console.log(`Server is running on port ${PORT}`);
});
