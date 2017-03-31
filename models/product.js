//import mongoose 
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//define new Schema - what does your js object look like?
var schema = new Schema({

imagePath: {type: String, required: true},
name: {type: String, required: true},
category: {type: String, required: true},
price: {type: Number, required: true},
quantity: {type: Number, required: true},

});

module.exports = mongoose.model('Product', schema);