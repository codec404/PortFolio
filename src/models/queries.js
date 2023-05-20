const mongoose = require("mongoose");

const querySchema = new mongoose.Schema({
    name :{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    phone:{
        type:Number,
        required: true
    },
    query:{
        type:String,
        required: true
    },
    message:{
        type: String,
        // required: true
    }
});

//Create a collection

const getQuery = new mongoose.model("ContactMessage",querySchema);
module.exports = getQuery;