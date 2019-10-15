const axios = require('axios');
const User = require('../models/User');
const Event = require('../models/Event');

// Controllers
const updateUsers = require('../controllers/updateUsers');
const getUserList = require('../controllers/getUserList');
const handleLogin = require('../controllers/login');
const handlePopulatedUser = require('../controllers/populatedUser');

const eventDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());

Event.create({ date: eventDate })
    .then(function (dbDate) {
        console.log(dbDate);
    }).catch(function (err) {
        console.log(err.message);
    });

module.exports = app => {

    app.get('/updateUsers', (req, res) => updateUsers(req,res, User));

    app.get('/userlist', (req, res) => getUserList(req, res, User));

    app.post('/login', (req, res) => handleLogin(req, res, User));

    app.get("/populateduser", (req, res) => handlePopulatedUser(req, res, Event));
}

