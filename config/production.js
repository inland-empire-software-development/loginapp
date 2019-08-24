// These variables are set in production env
module.exports = {
  mongoURI: process.env.MONGO_URI,
  clientID: process.env.GITHUB_CLIENTID,
  clientSecret: process.env.GITHUB_SECRET
};
