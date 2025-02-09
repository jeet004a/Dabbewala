const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const userRoutes = require('./routes/user.routes')
const { connectToDB } = require('./db/db')
module.exports = async(app) => {

    await connectToDB()
    app.use(cors())
    app.use(bodyparser.urlencoded({ extended: true }))
    app.use(express.json())

    app.get('/', async(req, res, next) => {
        res.send('hello World')
    })

    app.use('/users', userRoutes)
}