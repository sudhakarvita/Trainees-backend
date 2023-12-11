const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
   
        fullname:{
            type:String,
            require:true
        },
        username:{
            type:String,
            require:true
        },
        mobileno:{
            type: String,
            require: true
        },
        email:{
            type: String,
            require: true
        },
        address:{
            type: String,
            require: true
        },
        qualification:{
            type: String,
            require: true
        },
        gender: {
            type: String,
            enum: ['male', 'female',],
            required: true,
        },
        password:{
            type: Number,
            require: true
        },   

},
    { timestamps: true }
)

module.exports = mongoose.model("user",userSchema)