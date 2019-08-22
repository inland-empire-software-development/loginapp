const path = require('path');
const User = require('../models/User');
const Event = require('../models/Event');

// Import the axios library, to make HTTP requests
const axios = require('axios');
const keys = require('../keys');
const mongoose = require('mongoose');

// This is the client ID and client secret that you obtained
// while registering the application
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

const createEventDb = ()

module.exports = app => {

    // Declare the redirect route
    app.get('/oauth/redirect', (req, res) => {
        // The req.query object has the query params that
        // were sent to this route. We want the `code` param
        const requestToken = req.query.code;
        axios({
            // make a POST request
            method: 'post',
            // to the Github authentication API, with the client ID, client secret
            // and request token
            url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
            // Set the content type header, so that we get the response in JSOn
            headers: {
                accept: 'application/json'
            }
        }).then((response) => {
            // console.log(response);

            // Once we get the response, extract the access token from
            // the response body
            const accessToken = response.data.access_token;
            console.log(accessToken);
            axios({
                method: 'get',
                url: 'https://api.github.com/user/emails',
                headers: {
                    'Authorization': "bearer " + accessToken
                }
            })
                .then(response => {
                    console.log(response);

                    const data = response.data;
                    console.log(data);

                    data.forEach((item) => {
                        console.log(item);

                        if (item.primary === true) {

                            // This is to upload the email into the database
                            // axios({
                            //     method: 'post',
                            //     url: "http://localhost:8080/",
                            //     data: {
                            //         username: "Bob123",
                            //         email: item.email
                            //     }
                            // }).then(res => {
                            //     console.log(res);

                            // })
                            console.log('accessTOKEN', accessToken);
                            axios({
                                method: 'get',
                                url: "https://api.github.com/user",
                                headers: {
                                    'Authorization': "bearer " + accessToken
                                }
                            })
                            .then(resp => {
                                createUserDb(resp.data.login, item.email);
                            })
                        }
                    });

                    console.log(accessToken);

                    // axios({
                    //     method: 'post',
                    //     url: `https://github.com/logout`,
                    //     data: {
                    //         utf8: "✓",
                    //         authenticity_token: "qbMLdBOnWHRbjuU5OGCq4FPzQcATDZF3aS8VJA9EqaUrWcFqmBDyEnWev7hlI9EarE4Q4gXjl18DwyN5JSisiw==",
                    //     }
                    // }).then(response => {
                    //     console.log(response);
                    // })
                    //     .catch(err => console.log("Tony please fix me!!!!"));

                    // axios({
                    //   method: 'delete',
                    //   url: `https://api.github.com/applications/${clientID}/grants/${accessToken}`,
                    //   auth: {
                    //     userusername: clientID,
                    //     password: clientSecret
                    //   }
                    // }).then(responseTwo => {
                    //   // console.log('test:', responseTwo);
                    // })
                    // .catch(err => {
                    //   console.log('err', err);
                    // })
                });
        });
    });

    // The route that will actaully add the user into the database
    app.post('/', (req, res) => {

        const user = new User({
            username: req.body.username,
            email: req.body.email
        })
        user.save()
        .then(result => {
            console.log(result);
        })
        .catch(err => console.log(err));

        // res.status(201).json({
        //     message: "Handling POST request",
        //     createdUser: user
        // })
    })

    app.post('/test', (req, res) => {

    })

};

