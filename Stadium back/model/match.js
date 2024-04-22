const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    MatchName: 
    {
        required:true,
        type: String,
    },
    Time: 
    {
        required:true,
        type: String,
    },
    StadiumName: 
    {
        required:true,
        type: String,
    },
    Ticketsavailable:
    {
        required: true,
        type: String,
    }
 })

 module.exports = mongoose.model('tickets',dataSchema);