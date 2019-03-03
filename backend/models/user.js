const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'New User'
    },
    pets: [{
        type: Schema.Types.ObjectId,
        ref: 'Pet'
    }]
});


module.exports = mongoose.model('User', userSchema)