const express = require('express');
const router = express.Router();
const admin = require('../data/connection');

var db = admin.database();
var ref = db.ref();

router.get('/', (req,res)=>{
    ref.on("value", function (snapshot) {
        snapshot.forEach(function (data) {
          // var lat = data.val().latitude;
          // var long = data.val().longitude;
          //console.log("lat: " + lat + " long: " + long);
          res.json(data);
          return data
        });
        
        
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
})



module.exports = router;