const mongoose=require('mongoose');
const validator=require('validator');

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:[true,'Please enter your email'],
        unique:true,
        validate: [validator.isEmail,'Please enter valid email address']
    },
    password:{
        type:String,
        required:[true,'Plese enter your password'],
        minlength:[6,'Your password must be longer than 6 characters'],
    },
    tags:{
        type:[String]
    },
    about:{
        type:String
    },
    joinedAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Users', userSchema)