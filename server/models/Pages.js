const mongoose=require('mongoose');

const pagesSchema=mongoose.Schema({
    route: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    subheader: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    }
},{timestamps: true});

const Pages= mongoose.model('pages',pagesSchema);

module.exports=Pages;