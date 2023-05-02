const mongoose=require('mongoose');
const validator = require('validator');

const adminSchema=mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        // unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        validate: [validator.isEmail, "Please provide a valid email"],
    },
    role: {
        type: String,
        required: true,
        enum: {
            values: ['admin', 'manager', 'supervisor'],
            message: 'Role is either: admin, manager, or supervisor'
            
        },
        trim: true
    },
    status: {
        type: String,
        default: 'active',
        enum: {
            values: ['active', 'inactive'],
            message: 'Status is either: active or inactive'
        },
        trim: true
    }
},{timestamps: true});

const Admin= mongoose.model('admins',adminSchema);
module.exports=Admin;