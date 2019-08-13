module.exports = (req,res,next) => {
    passport.use(new GitHubStrategy({
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/github/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ githubId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));
    next();
}