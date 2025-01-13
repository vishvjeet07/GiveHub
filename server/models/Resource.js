const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const pdfSchema = new Schema({
    subject : {
        type : String,
        required : true
    },
    fileName: { 
        type: String, 
        required: true 
    },
    stream: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    semester : {
        type: Number,
        required : true
    },
    file : {
        type: Buffer,
        required : true
    },
    fileType: { 
        type: String, 
        required: true 
    }
})

module.exports = mongoose.model('File',pdfSchema);