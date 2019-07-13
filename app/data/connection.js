// Attach an asynchronous callback to read the data at our posts reference
var admin = require('firebase-admin');
var serviceAccount = require("./gun-violence-f2f2b-firebase-adminsdk-s9n3m-ae6d5e0b93.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://gun-violence-f2f2b.firebaseio.com"
});
var db = admin.database();
var ref = db.ref();
ref.on("value", function (snapshot) {
  snapshot.forEach(function (data) {
    // var lat = data.val().latitude;
    // var long = data.val().longitude;
    //console.log("lat: " + lat + " long: " + long);
    return data;
  });
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});


// var connection;
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
//
// }
// connection.connect(function(err) {
//     if (err) {
//       console.error("error connecting: " + err.stack);
//       return;
//     }
//     console.log("connected as id " + connection.threadId);
// });


// module.exports = connection;

