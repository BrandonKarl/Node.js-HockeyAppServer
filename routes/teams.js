var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

//Personal MongoDB with tram data
var db = mongojs('mongodb://username:password@ds139761.mlab.com:39761/hockeyappdatabase', ['teams']);


//Get all the teams
router.get('/teams', function(req, res, next){
	db.teams.find(function(err, teams){
		if(err) {
			res.send(err);
		}
		res.json(teams);
	});
});

//Find item in db by team
router.get('/teams/:team', function(req, res, next){
	//Changes to title case
	function toTitleCase(str)	{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	}

	//Usable string
	var raw = req.params.team;
	raw = toTitleCase(raw);
	var teamNoUnderscore = raw.replace(/_/g, ' ');

	//Search for team
	db.teams.findOne({
		'team.Name': teamNoUnderscore

	}, function(err, team){
		if(err) {
			res.send(err);
		}
		res.json(team);
	});
});

//Find item in db by city
router.get('/cities/:city', function(req, res, next){
	//Changes to title case
	function toTitleCase(str)	{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	}

	//Usagle string
	var raw = req.params.city;
	raw = toTitleCase(raw);
	var teamNoUnderscore = raw.replace(/_/g, ' ');

	//Search for city
	db.teams.findOne({
		'team.City': teamNoUnderscore

	}, function(err, team){
		if(err) {
			res.send(err);
		}
		res.json(team);
	});
});

module.exports = router;