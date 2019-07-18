const express = require('express')

// Import the axios library, to make HTTP requests
const axios = require('axios')

// This is the client ID and client secret that you obtained
// while registering the application
const clientID = 'dd87eb0d1732bf5e0f5b'
const clientSecret = 'dbc2511afcb0be42b2242213c8eca0074498c6a4'

const app = express()

// Declare the redirect route
app.get('/oauth/redirect', (req, res) => {
  // The req.query object has the query params that
  // were sent to this route. We want the `code` param
  const requestToken = req.query.code
  axios({
    // make a POST request
    method: 'post',
    // to the Github authentication API, with the client ID, client secret
    // and request token
    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
    // Set the content type header, so that we get the response in JSOn
    headers: {
         accept: 'application/json'
    }
  }).then((response) => {
   // console.log(response);
    
    // Once we get the response, extract the access token from
    // the response body
    const accessToken = response.data.access_token
    axios({
      method: 'get',
      url: 'https://api.github.com/user/emails',
      headers:{
        'Authorization': "bearer " + accessToken
      }
    })
    .then(response => {
      const data = response.data;

      data.forEach((item) => {
        if(item.primary === true){
          // console.log(index);
          console.log(item);
        }
      })
    })
  })
})


app.use(express.static(__dirname + '/public'))
app.listen(8080, () => {
  console.log("server is running in port 8080")
});