var admin = require('firebase-admin');
var serviceAccount = require("./gun-violence-f2f2b-firebase-adminsdk-s9n3m-ae6d5e0b93.json");

console.log('firing');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://gun-violence-f2f2b.firebaseio.com"
});
// var db = admin.database();
// var ref = db.ref();
// ref.on("value", function (snapshot) {
//   snapshot.forEach(function (data) {
//     // var lat = data.val().latitude;
//     // var long = data.val().longitude;
//     //console.log("lat: " + lat + " long: " + long);
//     return data;
//   });
//   console.log(snapshot)
// }, function (errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });

module.exports = admin;


