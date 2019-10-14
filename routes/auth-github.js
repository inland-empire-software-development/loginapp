const axios = require('axios');
const User = require('../models/User');
const Event = require('../models/Event');



const eventDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())



Event.create({ date: eventDate })
    .then(function (dbDate) {
        console.log(dbDate);
    }).catch(function (err) {
        console.log(err.message);
    });


module.exports = app => {

    app.get('/updateUsers', (req, res) => {
        axios({
            method: 'get',
            url: 'https://api.meetup.com/iesd-meetup/members?&sign=true&photo-host=public&offset=0'
        }).then((members) => {
            // console.log(members.data[0].name);
            for (let i = 0; i < members.data.length; i++) {
                let meetUpNamePg1 = members.data[i].name;
                // console.log(meetUpNamePg1 + i);

                // console.log(members.data[i].name);
                User.create({
                    Name: meetUpNamePg1
                })
            }

            axios({
                method: 'get',
                url: 'https://api.meetup.com/iesd-meetup/members?&sign=true&photo-host=public&offset=1'
            }).then((resp) => {
                // console.log(members.data[0].name);
                for (let i = 0; i < resp.data.length; i++) {
                    let meetUpNamePg2 = resp.data[i].name;
                    // console.log(meetUpNamePg2 + i);

                    // console.log(members.data[i].name);
                    User.create({
                        Name: meetUpNamePg2
                    })
                }

                axios({
                    method: 'get',
                    url: 'https://api.meetup.com/iesd-meetup/members?&sign=true&photo-host=public&offset=2'
                }).then((user) => {
                    // console.log(members.data[0].name);
                    for (let i = 0; i < user.data.length; i++) {
                        let meetUpNamePg3 = user.data[i].name;
                        // console.log(meetUpNamePg3 + i);

                        // console.log(members.data[i].name);
                        User.create({
                            Name: meetUpNamePg3
                        })
                    }

                    res.redirect("/")
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

            res.send(userMap);
        });
    })


    app.post('/login', (req, res) => {
        console.log(req.body.myMeetUp);

        const userLogin = req.body.myMeetUp;
        User.findOne({
            Name: userLogin
        })
            .then((data) => {
                // if (data) return Event.findOneAndUpdate({ date: eventDate }, { $push: { users: data._id } }, { new: true });
                if (data) {
                    Event.findOne({ date: eventDate, users: data._id })
                        .then(user => {
                            if (!user) return Event.findOneAndUpdate({ date: eventDate }, { $push: { users: data._id } }, { new: true });
                        })
                }

                return User.create({
                    Name: userLogin,

                }).then(function (dbUser) {

                    return Event.findOneAndUpdate({ date: eventDate }, { $push: { users: dbUser._id } }, { new: true })
                }).then(function (res) {
                    console.log(res);

                }).catch(function (err) {
                    console.log(err.message);
                });

            })
        res.redirect('/signedin')
    })

    app.get("/populateduser", function (req, res) {
        // Find all users
        Event.find({})
            // Specify that we want to populate the retrieved users with any associated notes
            .populate("users")
            .then(function (dbUser) {
                // If able to successfully find and associate all Users and Notes, send them back to the client
                res.json(dbUser);
            })
            .catch(function (err) {
                // If an error occurs, send it back to the client
                res.json(err);
            });
    })
}

