var express = require('express'); 
var bodyParser = require('body-Parser'); 
var app = express(); 

//Access control, allow everything (which is normally bad, obviously)

app.all("/*", function(req, res, next) {

	res.header("Access-Control-Allow-Origin", "*"); 
	res.header("Access-Control-Allow-Headers", "X-Requested-With", "Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "POST, GET");
	next(); 
}); 

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false})); 

var planets = [

	{
		name: "Mercury", 
		imageURL: "Mercury", //Not a URL right now, just image name
		distanceFromSun: "36,000,000 miles"
	}, 

	{
		name: "Venus", 
		imageURL: "Venus", 
		distanceFromSun: "67,000,000 miles"
	},

	{
		name: "Earth", 
		imageURL: "Earth", 
		distanceFromSun: "93,000,000 miles"
	},

	{
		name: "Mars", 
		imageURL: "Mars", 
		distanceFromSun: "141,000,000 miles"
	},

	{
		name: "Jupiter", 
		imageURL: "Jupiter", 
		distanceFromSun: "483,000,000 miles"
	},

	{
		name: "Saturn", 
		imageURL: "Saturn", 
		distanceFromSun: "886,000,000 miles"
	},

	{
		name: "Uranus", 
		imageURL: "Uranus", 
		distanceFromSun: "1.78 billion miles"
	},

	{
		name: "Neptune", 
		imageURL: "Neptune", 
		distanceFromSun: "2.76 billion miles"
	}

	//Sorry Pluto!
]; 

app.get('/planets', function(req, res) {
	console.log("GET from server"); 

	res.send(planets); 
}); 

app.listen(6069);