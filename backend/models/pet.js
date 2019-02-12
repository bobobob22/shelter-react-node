const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const petSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    destination: {
        type: String,
    },
    gender: {
        type: String,
    },
    race: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
    },
    creator: {
        type: Object,
        required: true
    },
}, {timestamps: true})

module.exports = mongoose.model('Pet', petSchema);




//timestamps -> mongoose add createdAt and updatedAt fields