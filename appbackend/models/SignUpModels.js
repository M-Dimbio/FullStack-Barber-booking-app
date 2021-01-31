const mongoose = require('mongoose')

const appointmentTemplate = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('mytable', appointmentTemplate)