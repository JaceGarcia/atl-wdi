const express = require('express');
const app = express();
const hbs = require('hbs');

app.set("view engine", "hbs");


app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('Welcome to Pizza Express!');
});

const toppingsController = require('./controllers/toppings_controller');
    app.use('/Toppings', toppingsController);

const orderController = require('./controllers/order_controllers');
    app.use('/order', orderController);


const port    = 3001;

app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});
