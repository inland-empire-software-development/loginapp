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
const eventDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())
let code = Math.floor(100000 + Math.random() * 900000)

// const createUserDb = (username, email) => {
//     const user = new User({
//         username,
//         email
//     })
//     user.save()
//         .then(result => {
//             console.log(result);
//         })
//         .catch(err => console.log(err));
// }

//Add Event date each user that signs in 
// const createEventDb = () => {
// const eventDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())
//     const event = new Event({
//         date: eventDate
//     });
//     event.save()
//         .then(result => {
//             console.log(result._id);
//             Event.findOneAndUpdate({ date: eventDate }, { $push: { users: result._id } }, { new: true });
//         })
//         .catch(err => console.log(err));
// }
// Event.create({ date: eventDate })
//     .then(function (dbDate) {
//         console.log(dbDate);
//     }).catch(function (err) {
//         console.log(err.message);
//     });


module.exports = app => {

    app.get('/updateUsers', (req, res) => {
        axios({
            method: 'get',
            url: 'https://api.meetup.com/iesd-meetup/members?&sign=true&photo-host=public&offset=0'
        }).then((members) => {
            // console.log(members.data[0].name);
            for (let i = 0; i < members.data.length; i++) {
                let meetUpNamePg1 = members.data[i].name;
                console.log(meetUpNamePg1 + i);

                // console.log(members.data[i].name);
                User.create({
                    Name: meetUpNamePg1
                })
            }

            axios({
                method: 'get',
                url: 'https://api.meetup.com/iesd-meetup/members?&sign=true&photo-host=public&offset=1'
            }).then((res) => {
                // console.log(members.data[0].name);
                for (let i = 0; i < res.data.length; i++) {
                    let meetUpNamePg2 = res.data[i].name;
                    console.log(meetUpNamePg2 + i);

                    // console.log(members.data[i].name);
                    User.create({
                        Name: meetUpNamePg2
                    })
                }

                axios({
                    method: 'get',
                    url: 'https://api.meetup.com/iesd-meetup/members?&sign=true&photo-host=public&offset=2'
                }).then((res) => {
                    // console.log(members.data[0].name);
                    for (let i = 0; i < res.data.length; i++) {
                        let meetUpNamePg3 = res.data[i].name;
                        console.log(meetUpNamePg3 + i);

                        // console.log(members.data[i].name);
                        User.create({
                            Name: meetUpNamePg3
                        })
                    }

                    res.send("Update done")
                })
            })
        })
    })

    app.get('/userlist', (req, res) => {
        User.find({}, function (err, users) {
            var userMap = [];

            for (let j = 0; j < users.length; j++) {
                userMap.push(users[j].Name)

            }

            // users.forEach(function (user) {
            //     userMap[user._id] = user.Name;
            // });

            res.send(userMap);
        });
    })

    /**
     * Route that GitHub redirects the user to
     * once they give access to the application.
     */
    //     app.get('/oauth/redirect', (req, res) => {
    //         const requestToken = req.query.code;

    //         /**
    //          * Post request to GitHub OAuth api with the client ID, 
    //          * client secret and request token. Request token is given
    //          * after user allows application access to their info.
    //          */
    //         axios({
    //             method: 'post',
    //             url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
    //             headers: {
    //                 accept: 'application/json'
    //             }
    //         }).then((response) => {

    //             /** 
    //              * Once we get the response, extract the access token from
    //              * the response body
    //              */
    //             const accessToken = response.data.access_token;
    //             axios({
    //                 method: 'get',
    //                 url: 'https://api.github.com/user/emails',
    //                 headers: {
    //                     'Authorization': "bearer " + accessToken
    //                 }
    //             })
    //                 .then(response => {
    //                     const data = response.data;

    //                     /**
    //                      * Loop through response and checks to see if 
    //                      * the data provided is the primary information of 
    //                      * the user.
    //                      */
    //                     data.forEach((item) => {
    //                         if (item.primary === true) {
    //                             axios({
    //                                 method: 'get',
    //                                 url: "https://api.github.com/user",
    //                                 headers: {
    //                                     'Authorization': "bearer " + accessToken
    //                                 }
    //                             })
    //                                 .then(resp => {
    //                                     User.findOne({
    //                                         username: resp.data.login
    //                                     }).then((data) => {
    //                                         // if (data) return Event.findOneAndUpdate({ date: eventDate }, { $push: { users: data._id } }, { new: true });
    //                                         if(data){
    //                                             Event.findOne({ date: eventDate, users: data._id })
    //                                             .then(user => {
    //                                                 if(!user) return Event.findOneAndUpdate({ date: eventDate }, { $push: { users: data._id } }, { new: true });
    //                                             })
    //                                         }

    //                                         return User.create({
    //                                             username: resp.data.login,
    //                                             email: item.email
    //                                         }).then(function (dbUser) {
    //                                             console.log(dbUser.email);

    //                                             return Event.findOneAndUpdate({ date: eventDate }, { $push: { users: dbUser._id } }, { new: true })
    //                                         }).then(function (res) {
    //                                             console.log(res);

    //                                         }).catch(function (err) {
    //                                             console.log(err.message);
    //                                         });

    //                                     })
    //                                     // createUserDb(resp.data.logn, item.email);
    //                                     // createEventDb();
    //                                     // console.log(resp.data);
    //                                     res.redirect('/signedin')
    //                                 })
    //                         }
    //                     });
    //                 });
    //         });
    //     });

    //     app.get("/populateduser", function (req, res) {
    //         // Find all users
    //         Event.find({})
    //             // Specify that we want to populate the retrieved users with any associated notes
    //             .populate("users")
    //             .then(function (dbUser) {
    //                 // If able to successfully find and associate all Users and Notes, send them back to the client
    //                 res.json(dbUser);
    //             })
    //             .catch(function (err) {
    //                 // If an error occurs, send it back to the client
    //                 res.json(err);
    //             });
    //     });
    //     app.get("/codeToday", function (req, res) {
    //         var lastUpdateTime = new Date().getTime();


    //         var currentTime = new Date().getTime();
    //         if (currentTime - lastUpdateTime >= 24 * 60 * 60 * 1000) // number of milliseconds in a day
    //         {
    //             // update cycleDay
    //             lastUpdateTime = currentTime;
    //             // ...
    //             code = Math.floor(100000 + Math.random() * 900000)
    //         }

    //         res.json(code)
    //     })
};
