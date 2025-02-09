const express = require('express')
const { PORT } = require('./config')
const app = express()
const expressApp = require('./express-app')


const server = async() => {

    await expressApp(app)
    app.listen(PORT, () => {
        console.log(`Server Started At ${PORT}`)
    })
}

server()