const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/miniproject");

const userschema = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    profile : {
        type : String,
        default : 'defaultuser.jpg',
    },
    posts : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "post"
        }
    ]
})

module.exports = mongoose.model("user",userschema);