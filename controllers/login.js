
/**
 * @function handleLogin 
 * Checks today's date to see if event exists in database. 
 * 
 * If event exists, add user to list of checked-in users.
 * 
 * Else create a new event entry and add
 * the current user as the first checked-in user.
 */

const handleLogin = (req, res, User, Event) => {
  const userLogin = req.body.myMeetUp;
  const eventDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());

  User.findOne({
      Name: userLogin
  })
  .then((data) => {
      if (data) {
          return Event.findOne({ date: eventDate })
          .then(event => {
              if(event){
                return Event.findOneAndUpdate({ date: eventDate }, { $push: { users: data._id } }, { new: true });
              } else {
                return Event.create({ date: eventDate, users: [data._id] })
                .catch(function (err) {
                    console.log(err.message);
                });
              }
          })
      }
  })
  res.redirect('/signedin');
}

module.exports = handleLogin;