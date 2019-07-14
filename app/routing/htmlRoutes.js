var path = require("path");
var express = require("express");

var app = express();

module.exports = function(app) {
	// Displays incidents page when user clicks on an incident
	// app.get("/incidents", function(req, res) {
	// 	res.sendFile(path.join(__dirname, "/../public/incidents.html"));
	// });

	// Displays home page by default
	app.get('/',(req,res) =>{
		res.sendFile(path.join(__dirname, "/../public/home.html"))
	})

	app.get('/map', (req, res)=>{
		res.sendFile(path.join(__dirname, '/../public/map.html'))
	})
};