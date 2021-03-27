const mongoose = require('mongoose');

const date= new Date;
const localedate= date.toLocaleDateString();

const art = new mongoose.Schema({
    title:String,
    description:String,
    artist:String,
    date: { type:String, default:localedate},
    likescount: String,
    filename:String,
    route:String,
    visibility: String,
})

module.exports = mongoose.model("Art",art);