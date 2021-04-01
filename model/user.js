const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const date= new Date;
const localedate= date.toLocaleDateString();

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
    art: [{type: ObjectId , ref:"art"}],
    profile:String,
    kind: kind,
    route: String,
    followers: [mate],
    following: [mate],
    likedart: [{type: ObjectId , ref:"art"}]
})
module.exports = mongoose.model('User', user);