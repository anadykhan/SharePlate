const mongoose = require('mongoose')

const donationsSchema = new mongoose.Schema({
    expireDate: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    likes: {
        type: [String],
        default: []
    }
})

//Compiling the model
module.exports = mongoose.model('Donation', donationsSchema)