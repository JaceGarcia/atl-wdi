var express = require('express');
var router = express.Router();

var User = require("../models/user");
var Item = require("../models/item");

// USERS INDEX ROUTE
router.get('/', (request, response) => {

    User.find({})
        .then((users) => {
            response.render('users/index', {
                users: users
            });
        })
        .catch((error) => {
            console.log(`ERROR!!!! ${error}`);
        });

})

// USER SHOW ROUTE
router.get('/:id', (req, res) =>{
    user.findById(request.params.id)
        .then((user) => {
            response.render('users/show', {
                user: user
            })
        })
})
// CREATE ROUTER FORM
router.get('/new', (request, response) => {
    response.render('users/new');
})
// USER CREATE ROUTE
router.post('/', (request, response) => {
    const newUser = new User(request.body);
    newUser.save((err) => {
        if (err) {
            console.console.log('Error saving new user to data base' + err);
        }
    })
})
// USER UPDATE ROUTE

// USER DESTROY
router.get('/:id/delete', (request, response) => {
    const userIdToDelete = request.params.id;
    user.findByIdAndRemove(userIdToDelete)
    .then(() =>{
        console.log(`deleted user wit ID ${userIdToDelete}!`)
        response.redirect('/users');
    })
});
// ADD A NEW ITEM

// REMOVE AN ITEM

module.exports = router;
