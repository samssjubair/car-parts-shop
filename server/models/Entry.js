const mongoose=require('mongoose');
const validator=require('validator');

const entrySchema=mongoose.Schema({
    brandName:{
        type: String,
        minLength: [2, "Brand name must be more than 2 characters"],
        maxLength: 100,
        required: true,
        trim: true
    },
    modelName:{
        type: String,
        required: true,
        trim: true
    },
    year:{
        type: Number,
        required: true,
        min: [1980,"Car production year must be after 1980"],
        max: [new Date().getFullYear(), "Car production year must not be in future"]
    },
    requiredParts: {
        type: String,
        required: true,
        trim: true
    },
    type:{
        type: String,
        required: true,
        enum: {
            values: ["gcc", "american", "japanese", "others"],
            message: "Please select a valid type"
        }
    },
    quantity: {
        type: Number,
        // required: true,
        min: [1, "Quantity must be more than 1"]
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        validate: [validator.isEmail, "Please provide a valid email"],
        required: [true, 'Email required'],
        lowercase: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    deliveryAddress: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        default: "new",
        enum: ["new","contracting", "lost"],
        // required: true
    }

    
},{timestamps: true});

const Entry= mongoose.model('entries',entrySchema);

module.exports=Entry;