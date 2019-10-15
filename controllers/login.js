const handleLogin = (req, res, User) => {
  const userLogin = req.body.myMeetUp;
  User.findOne({
      Name: userLogin
  })
  .then((data) => {
      if (data) {
        Event.findOne({ date: eventDate, users: data._id })
        .then(user => {
            if (!user) return Event.findOneAndUpdate({ date: eventDate }, { $push: { users: data._id } }, { new: true });
        });
      }
      return User.create({
          Name: userLogin,
      }).then(function (dbUser) {
          return Event.findOneAndUpdate({ date: eventDate }, { $push: { users: dbUser._id } }, { new: true })
      }).catch(function (err) {
          console.log(err.message);
      });
  })
  res.redirect('/signedin');
}

module.exports = handleLogin;