var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

router.get('/', (req, res)=>{
    res.render('pirates/index');
});
router.post()


module.exports = router;
