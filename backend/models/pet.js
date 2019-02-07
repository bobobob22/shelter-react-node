const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const petSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    creator: {
        type: Object,
        required: true
    },
}, {timestamps: true})

module.exports = mongoose.model('Pet', petSchema);




//timestamps -> mongoose add createdAt and updatedAt fields