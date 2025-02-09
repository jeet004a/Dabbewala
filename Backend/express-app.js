const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const userRoutes = require('./routes/user.routes')
const { connectToDB } = require('./db/db')
module.exports = async(app) => {

    const corsOptions = {
        origin: '*', // Allow only this origin
        methods: 'GET,POST,PUT,DELETE', // Allowed HTTP methods
        allowedHeaders: 'Content-Type,Authorization', // Allowed headers
        credentials: true, // Allow cookies and authentication headers
    }

    await connectToDB()
    app.use(cors(corsOptions))
    app.use(bodyparser.urlencoded({ extended: true }))
    app.use(express.json())

    app.get('/', async(req, res, next) => {
        res.send('hello World')
    })

    app.use('/users', userRoutes)
}