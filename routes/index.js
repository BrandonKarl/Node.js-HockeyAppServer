var express = require('express');
var router = express.Router();

//Root path goes to index.html landing page
router.get('/', function(req, res, next){
	res.render('index.html');
});

module.exports = router;