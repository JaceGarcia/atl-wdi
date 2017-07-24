//==============================
// REQUIREMENTS
//==============================

var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//==============================
// READ
//==============================
//for root pirate page
router.get('/', function(req, res){
	res.render("pirates/index.hbs", {
		pirates: pirates
	});
});


router.get('/new', function(req, res){
	res.render("pirates/new.hbs");
});


//this is for each pirate page
router.get('/:id', function(req, res){

	//grab the pirate by id
	var showPirate = pirates[req.params.id];

	res.render("pirates/show.hbs", {
		pirate: showPirate
	});
});


//==============================
// CREATE
//==============================
router.get('/:id/edit', (req, res) => {
    const id = req.params.id;
        res.render('pirates/edit',{
    })
});
//==============================
// UPDATE
//==============================
router.put('/:id', (req, res) => {
    const id = req.params.id;
    pirates.name = req.body.name;
	pirates.birthplace = req.body.birthplace;
	pirates.death_year = req.body.death_year;
	pirates.base = req.body.base;
	pirates.namename = req.body.nickname;
    res.method = "GET";
    res.redirect(`/pirates/${id}`);
});
//==============================
// DESTROY
//==============================
router.delete('/:id', (req, res) => {
    data.splice(req.params.id, 1);
    res.redirect('/pirates');
})
//==============================
// EXPORTS
//==============================

module.exports = router;
