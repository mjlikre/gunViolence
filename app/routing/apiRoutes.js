const express = require('express');
const router = express.Router();
const admin = require('../data/connection');



router.get('/', (req, res)=>{
    res.send(admin.snapshot);
})




module.exports = router;