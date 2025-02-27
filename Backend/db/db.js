const mongoose = require('mongoose')
const { DB_URL } = require('../config')

module.exports.connectToDB = async() => {
    try {
        await mongoose.connect(DB_URL)
        console.log('DB Connected')
    } catch (error) {
        console.log('============= Error While Connecting DB=================')
        console.log(error)
        process.exit(1)
    }
}