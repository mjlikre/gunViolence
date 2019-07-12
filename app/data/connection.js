var mysql = require('mysql');
var admin = require('firebase-admin');
var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://gun-violence-f2f2b.firebaseio.com"
});

// var connection
// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL)
// } else {
//     connection = mysql.createConnection({
//         host: 'localhost',
//         port: '3306',
//         user: 'root',
//         password: 'password',
//         database: 'guns'
//     });
    
// }
// connection.connect(function(err) {
//     if (err) {
//       console.error("error connecting: " + err.stack);
//       return;
//     }
//     console.log("connected as id " + connection.threadId);
// });






module.exports = connection;

