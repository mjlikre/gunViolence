"use strict";

const express = require('express');
const mongoose = require("mongoose");
const app = express();

// Load Mongoose DB Models
const db = require("./models");

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Load routes
const index = require("./routes/index");
const incidents = require("./routes/api/incidents");

// Serving static files on Express
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));
app.use('/data', express.static(__dirname + '/data'));

// Set up middleware
app.use("/", index);
app.use("/api/incidents", incidents);

// Connect to Mongo DB
mongoose.connect(db.MONGODB_URI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false
}).then(() => console.log(`Connected to MongoDB ${db.MONGODB_URI}`))
	.catch(err => console.log(err));

// Server going live
app.listen(PORT, function () {
	console.log("Server started on PORT: " + PORT);
});