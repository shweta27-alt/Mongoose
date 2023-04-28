const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    Email:String,
    hobbies:[{
        home:String,
        college:String
    }],
    address:{
        street:String,
        city:String
    }



})


userSchema.index({name:"text"})

module.exports = mongoose.model("user",userSchema)