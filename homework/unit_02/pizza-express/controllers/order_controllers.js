const express = require('express');

const router = express.Router();

router.get('/:amount/:size', function(req, res, next) {
        res.render('../views/order.hbs',{
        data: `Your order for ${req.params.amount} ${req.params.size} pizzas will be ready in 1 minute!`});
});

module.exports = router;
