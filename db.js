const mongoose = require('mongoose')
const mongoUrl = "mongodb://localhost:27017/themedb"

const connectToMongoose = () => {
    mongoose.connect(mongoUrl, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(() => {
        console.log("server is connected")

    })
}
module.exports = connectToMongoose;
