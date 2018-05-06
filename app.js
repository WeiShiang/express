var express = require('express');
var path = require('path');

var app = express();

//view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

//record log($ npm install morgan)
var logger = require('morgan');
app.use(logger('dev'));

// configure app to use bodyParser()
// this will let us get the data from Request
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());

// mount the index route at the /path
var routes = require('./routes/index');
app.use('/', routes); 
var login = require('./routes/login');
app.use('/login', login); 

app.use(express.static(path.join(__dirname,'public')));

//$ npm install serve-favicon 
var favicon = require('serve-favicon');
app.use(favicon(path.join(__dirname,'public','images','batman.ico')));

//catch 404 and forward to error handler
app.use(function(req,res,next) {
	var err = new Error('Not Found');
	err.status = 400;
	next(err);
});


app.listen(3333,function(req,res) {
  console.log('Node.js web server at port 3333 is running..');
});	


module.exports = app;
