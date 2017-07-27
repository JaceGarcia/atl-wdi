//requirements: require mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;


//create your donut schema:
var donutSchema = new Schema({;
    var newDonut = new mongoose.Schema({
        name: String,
        description: String,
        img: String,
        price: Number,
        qty: Number
    });

})

//export your donut with module.exports()



module.exports = donutSchema;