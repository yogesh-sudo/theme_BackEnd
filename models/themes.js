const mongoose = require('mongoose')
const { Schema } = mongoose


const themeSchema = new Schema({
    theme: {
        Image: {
            type: String,
        },
        Type: {
            type: String
        },
        Name: {
            type: String
        },
        Youtube: {
            type: String
        },
        Description: {
            type: String
        },
        CreaterName: {
            type: String
        },
        Link: {
            type: String
        },
        dateTime: {
            type: Date,
            default: Date.now
        }
    }


})

module.exports = mongoose.model("themedb", themeSchema)
