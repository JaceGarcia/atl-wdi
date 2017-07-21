const express = require('express');
const hbs = require('hbs');
const logger = require('morgan');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const pirateController = require('./controllers/pirates.js');
app.use("/pirates", pirateController);

const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
  console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
});
