const express = require('express')

const passport = require('passport');
const app = express()
const path = require("path");
const GitHubStrategy = require('passport-github2').Strategy;

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) =>   res.sendFile(path.join(__dirname, "./public/index.html")));


// require("./routes/apiRoutes")(app);

/*  GITHUB AUTH  */


const GITHUB_CLIENT_ID = 'dd87eb0d1732bf5e0f5b'
const GITHUB_CLIENT_SECRET = 'dbc2511afcb0be42b2242213c8eca0074498c6a4'


passport.use(new GitHubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: "http://127.0.0.1:3000/auth/github/callback"
},
function(accessToken, refreshToken, profile, done) {
  // User.findOrCreate({ githubId: profile.id }, function (err, user) {
  //   console.log("awdawdaw", user);
    
  //   return done(err, user);
  // });
  console.log(accessToken);
  
}
));



app.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
  app.get('/oauth/redirect', (req,res) => {
    res.redirect("/")
  }) 


// app.use(express.static(__dirname + '/public'))
app.listen(8080, () => {
  console.log("Server is running in port 8080")
});

// Users collection
{
  fullName: "Tony Nguyen",
  email: "tony@gmail.com",
}

// Events collection
{
  created_at: "8-13-2019",
  attendees: ["tony@gmail.com", "andy@gmail.com"]
}