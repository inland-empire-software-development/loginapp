const path = require('path');
const axios = require('axios');
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = require('../models/User');
const Event = require('../models/Event');

// console.log(new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate()));

/**
 * This is the client ID and client secret provided by GitHub
 * when you register for an OAuth app.
 */
const clientID = keys.clientID;
const clientSecret = keys.clientSecret;

const createUserDb = (username, email) => {
    const user = new User({
        username,
        email
    })
    user.save()
    .then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));
}

//Add Event date each user that signs in 
const createEventDb = () => {
    const eventDate= new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate())
    const event = new Event({
        date: eventDate
    });
    event.save()
    .then(result => {
        console.log(result._id);
        Event.findOneAndUpdate({date: eventDate}, {$push: {users: result._id}}, {new: true});
    })
    .catch(err => console.log(err));
}

// const createDate = () => {
//     let d = new Date();
//     let formattedDate = "";

//     //index 0-11, add 1 
//     formattedDate += (d.getMonth() + 1) + "_";
//     formattedDate += d.getDate() + "_";
//     formattedDate += d.getFullYear();
    
//     return formattedDate;
// }

module.exports = app => {

    /**
     * Route that GitHub redirects the user to
     * once they give access to the application.
     */
    app.get('/oauth/redirect', (req, res) => {
        const requestToken = req.query.code;

        /**
         * Post request to GitHub OAuth api with the client ID, 
         * client secret and request token. Request token is given
         * after user allows application access to their info.
         */
        axios({
            method: 'post',
            url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
            headers: {
                accept: 'application/json'
            }
        }).then((response) => {

            /** 
             * Once we get the response, extract the access token from
             * the response body
             */
            const accessToken = response.data.access_token;
            axios({
                method: 'get',
                url: 'https://api.github.com/user/emails',
                headers: {
                    'Authorization': "bearer " + accessToken
                }
            })
            .then(response => {
                const data = response.data;

                /**
                 * Loop through response and checks to see if 
                 * the data provided is the primary information of 
                 * the user.
                 */
                data.forEach((item) => {
                    if (item.primary === true) {
                        axios({
                            method: 'get',
                            url: "https://api.github.com/user",
                            headers: {
                                'Authorization': "bearer " + accessToken
                            }
                        })
                        .then(resp => {
                            createUserDb(resp.data.login, item.email);
                            createEventDb();
                            console.log(resp.data);
                        })
                    }
                });
            });
        });
    });

    app.get('/test', (req, res) => {
        Event.find({})
        .populate('users')
        .then(dbUser => {
            res.json(dbUser);
        })
        .catch(err => {
            res.json(err);
        })
    })
};
