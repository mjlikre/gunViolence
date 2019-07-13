const express = require("express");
// const connection = require('./app/data/connection');
// const fs = require('fs');	

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serving static files on Express
app.use('/css',express.static(__dirname + '/app/public/css'));
app.use('/js',express.static(__dirname + '/app/public/js'));
app.use('/images',express.static(__dirname + '/app/public/images'));
app.use('/data',express.static(__dirname + '/app/data'));

// API and HTML routes
// require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// connection.query('SELECT state, COUNT(state) FROM gun_violence GROUP BY state;', function(err, data){
// 	if (err) throw err; //#endregion
// 	console.log(data);
// 	fs.writeFile("data.csv", JSON.stringify(data), function(err) {
// 		// If the code experiences any errors it will log the error to the console.
// 		if (err) {
// 		  return console.log(err);
// 		}
	  
// 		// Otherwise, it will print: "movies.txt was updated!"
// 		console.log("movies.txt was updated!");
	  
// 	  });
// });

// Checking if server is live
app.listen(PORT, function () {
	console.log("Server started on PORT: " + PORT);
});