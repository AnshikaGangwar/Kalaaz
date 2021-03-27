const mongoose = require('mongoose');

// const Art = require('./art');

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
const kind = new mongoose.Schema({
    provider:String,
    uid:String
})
const mate = new mongoose.Schema({
    userid: String,
    dname:String
})

const user = new mongoose.Schema({
    name:String,
    dname:String,
    email:String,
    password:String,
    resetPassword:String,
    art: [art],
    profile:String,
    kind: kind,
    route: String,
    followers: [mate],
    following: [mate],
    likedart: [String]
})
module.exports = mongoose.model('User', user);