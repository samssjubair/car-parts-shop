const mongoose=require('mongoose');
const validator = require('validator');

const adminSchema=mongoose.Schema({
    username: {
        type: String,
        // required: true,
        trim: true,
        // unique: true
    },
    password: {
        type: String,
        // required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        validate: [validator.isEmail, "Please provide a valid email"],
    }
},{timestamps: true});

const Admin= mongoose.model('admins',adminSchema);
module.exports=Admin;