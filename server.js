const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Checking if server is live
app.listen(PORT, function () {
	console.log("Server started on PORT: " + PORT);
});

// // Serving static files on Express
app.use('/css', express.static(__dirname + '/app/public/css'));
app.use('/js', express.static(__dirname + '/app/public/js'));
app.use('/images', express.static(__dirname + '/app/public/images'));
app.use('/data', express.static(__dirname + '/app/data'));

// // API and HTML routes
require("./app/routing/htmlRoutes.js")(app);
app.use('/api/data', require('./app/routing/apiRoutes'));