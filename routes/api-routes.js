/**
 * Yarn packages needed
 */
const axios = require('axios');
const User = require('../models/User');
const Event = require('../models/Event');

// Controllers
const updateUsers = require('../controllers/updateUsers');
const getUserList = require('../controllers/getUserList');
const handleLogin = require('../controllers/login');
const handlePopulatedUser = require('../controllers/populatedUser');

module.exports = app => {
    
    // Route to update database with new users from meetup
    app.get('/updateUsers', (req, res) => updateUsers(req,res, User));

    //  Route to get all users from database and send them to the front end
    app.get('/userlist', (req, res) => getUserList(req, res, User));

    // Route to save user's id into our events document
    app.post('/login', (req, res) => handleLogin(req, res, User, Event));

    // Route to show all users in our events document 
    app.get("/populateduser", (req, res) => handlePopulatedUser(req, res, Event));

}

