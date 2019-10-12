const path = require('path');

module.exports = app => {
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/signedin', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/signedin.html'));
  })
};
