const express = require('express');
const path = require('path');
const checker = require('./api/checker');
const movies = require('./api/movies');
const video = require('./api/video');

const app = express();

app.disable('x-powered-by');
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['https://sagarpanda.github.io']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  res.append('Referrer-Policy', 'no-referrer-when-downgrade');
  next();
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.htm'))
});

app.get('/checker', checker);

app.get('/movies', movies);

app.get('/video/:id', video);

app.listen(9000, function () {
  console.log('Listening on port 9000!')
});
