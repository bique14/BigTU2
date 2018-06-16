var express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

var app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-wwwform-urlencoded

const config = require('./config/database');
const CampusesModel = require('./models/CampusesModel');

mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
  console.log('Connected to database ' + config.database);
});

mongoose.connection.on('error', () => {
  console.log('Database error');
});

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// REST for users
// app.use('/api', userRouter);

app.get('*', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send({
    result: false,
    status_code: 404,
    status_message: 'Request not found'
  });
});

app.listen(4000, function() {
  console.log('SSR API listening on port 4000');
});
