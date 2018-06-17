var express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

var app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-wwwform-urlencoded

const config = require('./config/database');
const CampusesModel = require('./models/CampusesModel');
const ApiController = require('./controllers/ApiController')
const ApiRouter = require('./routes/ApiRouter')

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
app.use('/api', ApiRouter);

app.get('*', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  let result = ApiController.initResult(false);
  result['status_code'] = 404;
  result['status_message'] = 'Request not found';
  res.send(result);
});

app.listen(4000, function() {
  console.log('SSR API listening on port 4000');
});
