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
            console.log(members.data[0].photo.thumb_link);
            for (let i = 0; i < members.data.length; i++) {
                let meetUpNamePg1 = members.data[i].name;
                let meetUpPic;
                let meetUpId = members.data[i].id;
                if (members.data[i].photo) {
                    meetUpPic = members.data[i].photo.thumb_link;
                }
                else {
                    meetUpPic = "https://secure.meetupstatic.com/photos/event/3/9/b/thumb_482640923.jpeg";
                }

                User.create({
                    meetUpId,
                    Name: meetUpNamePg1,
                    photourl: meetUpPic
                });
            }

            axios({
                method: 'get',
                url: 'https://api.meetup.com/iesd-meetup/members?&sign=true&photo-host=public&offset=1'
            }).then((resp) => {
                // console.log(members.data[0].name);
                for (let i = 0; i < resp.data.length; i++) {
                    let meetUpNamePg2 = resp.data[i].name;
                    let meetUpPic;
                    let meetUpId = resp.data[i].id;
                    if (resp.data[i].photo) {
                        meetUpPic = resp.data[i].photo.thumb_link;
                    }
                    else {
                        meetUpPic = "https://secure.meetupstatic.com/photos/event/3/9/b/thumb_482640923.jpeg";
                    }

                    User.create({
                        meetUpId,
                        Name: meetUpNamePg2,
                        photourl: meetUpPic
                    })
                }

                axios({
                    method: 'get',
                    url: 'https://api.meetup.com/iesd-meetup/members?&sign=true&photo-host=public&offset=2'
                }).then((user) => {
                    // console.log(members.data[0].name);
                    for (let i = 0; i < user.data.length; i++) {
                        let meetUpNamePg3 = user.data[i].name;
                        let meetUpPic;
                        let meetUpId = user.data[i].id;
                        if (user.data[i].photo) {
                            meetUpPic = user.data[i].photo.thumb_link;
                        }
                        else {
                            meetUpPic = "https://secure.meetupstatic.com/photos/event/3/9/b/thumb_482640923.jpeg";
                        }

                        User.create({
                            meetUpId,
                            Name: meetUpNamePg3,
                            photourl: meetUpPic
                        });
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
                userMap.push(users[j])
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

