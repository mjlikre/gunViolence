const express = require('express');
const router = express.Router();
const connection = require('../data/connection');



router.get('/', (req,res)=>{
    connection.query('SELECT * FROM gunViolenceSlim;', (err, data)=>{
      if (err){
        return res.status(500).end
      }
      res.send(data);
    })
})



module.exports = router;