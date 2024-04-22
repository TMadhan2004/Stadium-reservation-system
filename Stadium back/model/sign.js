const mongoose = require("mongoose");

 const dataSchema = new mongoose.Schema({
    Username:
    {
        required:true,
        type: String,
    },
    Email:
    {
        required:true,
        type: String,
    },
    Age:
    {
       required:true,
       type: String,
    },
    Phonenumber:
    {
        required:true,
        type:String,
    },
    Password:
    {
        required:true,
        type:String,
    }
})

 module.exports = mongoose.model('signup',dataSchema);