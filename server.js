var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var teams = require('./routes/teams');

//Find right port
var port = process.env.PORT || 8080;

var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Static folder
app.use(express.static(path.join(__dirname, 'client')));

//Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//Fix CORS issue in client
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', index);
app.use('/api', teams);

app.listen(port, function(){
	console.log("Server started");
});