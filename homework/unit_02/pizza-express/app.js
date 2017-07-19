const express = require('express');
const app = express();
const hbs = require('hbs');

app.set("view engine", "hbs");


const port    = 3001;

app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});
