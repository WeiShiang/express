var express = require('express');
var router = express.Router();
var app = express();

//解析request
var bodyParser = require('body-parser');

router.get('/', function(req, res) {
	console.log('get into login.js Time: ', Date.now());
  	res.render('login' , {title:'Trvaeling'});
});

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});

module.exports = router;