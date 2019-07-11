const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API and HTML routes
// require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Checking if server is live
app.listen(PORT, function () {
	console.log("Server started on PORT: " + PORT);
});