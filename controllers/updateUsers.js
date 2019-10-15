const axios = require('axios');

/**
 * @function handleUpdateUsers 
 * to get all users from meet up and save to our database and redirecting them back to home page
 * Meetup only sends to only 200 users at a time, so we need to make another @axios call once we pass 600 users 
 */

const handleUpdateUsers = (req, res, User) => {
  axios({
    method: 'get',
    url: 'https://api.meetup.com/iesd-meetup/members?&sign=true&photo-host=public&offset=0'
  }).then((members) => {
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
}

module.exports = handleUpdateUsers;
