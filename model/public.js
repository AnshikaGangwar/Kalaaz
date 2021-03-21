var mongoose = require('mongoose');

var individual_art = new mongoose.Schema({
    title:String,
    description:String,
    artist:String,
    
})
var art = new mongoose.Schema({
    arts:[individual_art]
})