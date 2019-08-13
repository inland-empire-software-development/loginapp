const axios = require('axios')


module.exports = app =>{

    // app.get("/logout", (req, res) => {
    //     req.logout();
    //     res.redirect("/");
    //   });

    //   passport.use(new GitHubStrategy({
    //     clientID: GITHUB_CLIENT_ID,
    //     clientSecret: GITHUB_CLIENT_SECRET,
    //     callbackURL: "http://127.0.0.1:3000/auth/github/callback"
    //   },
    //   function(accessToken, refreshToken, profile, done) {
    //     User.findOrCreate({ githubId: profile.id }, function (err, user) {
    //       return done(err, user);
    //     });
    //   }
    // ));
    // Declare the redirect route
// app.get('/oauth/redirect', (req, res) => {
//     // The req.query object has the query params that
//     // were sent to this route. We want the `code` param
//     const requestToken = req.query.code
//     axios({
//       // make a POST request
//       method: 'post',
//       // to the Github authentication API, with the client ID, client secret
//       // and request token
//       url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
//       // Set the content type header, so that we get the response in JSOn
//       headers: {
//            accept: 'application/json'
//       }
//     }).then((response) => {
//      // console.log(response);
      
//       // Once we get the response, extract the access token from
//       // the response body
//       const accessToken = response.data.access_token
//       axios({
//         method: 'get',
//         url: 'https://api.github.com/user/emails',
//         headers:{
//           'Authorization': "bearer " + accessToken
//         }
//       })
//       .then(response => {
//         const data = response.data;
  
//         data.forEach((item) => {
//           if(item.primary === true){
//             // console.log(index);
//             console.log(item);
//           }
//         })
//       })
//     })
//   })
}