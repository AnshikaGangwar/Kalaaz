const mongoose = require('mongoose');

const date= new Date;
const localedate= date.toLocaleDateString();
const art = new mongoose.Schema({
    title:String,
    description:String,
    artist:String,
    date: { type:String, default:localedate}
})

const user = new mongoose.Schema({
    name:String,
    dname:String,
    email:String,
    password:String,
    resetPassword:String,


})
module.exports = mongoose.model('User', user);