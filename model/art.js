const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;


const artist = new mongoose.Schema({
    id: {type: ObjectId, ref: "User"},
    dname: String,
    profile: String,
})

const art = new mongoose.Schema({
    title:String,
    description:String,
    artist:artist,
    date: String,
    likes: [{ type:ObjectId, ref:"User"}],
    filename:String,
    route:String,
    visibility: String,
})

module.exports = mongoose.model('Art',art);