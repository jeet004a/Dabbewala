const userModel = require('../models/user.model')
const { validationResult } = require('express-validator')
const userService = require('../service/user.service')
const blacklistTokenModel = require('../models/blacklistToken.model')

module.exports.registerUser = async(req, res, next) => {
    try {
        // console.log('ABC')
        const error = validationResult(req)

        if (!error.isEmpty) {
            return res.status(401).json({ error: error.array() })
        }

        const { fullname, email, password } = req.body



        const hashedPassword = await userModel.hashPassword(password)

        const existingUser = await userModel.findOne({ email: email })

        if (existingUser) {
            return res.status(200).json({ 'message': "User already exist with this email id" })
        }

        const user = await userService.createUser({ firstname: fullname.firstname, lastname: fullname.lastname, email, password: hashedPassword })
        const token = user.generateAuthToken()
            // console.log(user)
        res.status(201).json({ user, token })
            // res.status(200).json({ "message": "Nikal" })
    } catch (error) {
        console.log('Error occurs from register user controller', error)
    }
}


module.exports.loginUser = async(req, res, next) => {
    try {
        // console.log('abc')
        const error = validationResult(req)

        if (!error.isEmpty) {
            return res.status(401).json({ error: error.array() })
        }

        const { email, password } = req.body

        const user = await userModel.findOne({ email: email }).select('+password')

        if (!user) {
            return res.status(200).json({ 'message': "wrong email id or password" })
        }

        const isMatch = await user.comparePassword(password)

        if (!isMatch) {
            return res.status(200).json({ 'message': "wrong email id or password" })
        }

        const token = user.generateAuthToken()

        res.status(201).json({ token, user })

        // res.status(200).json({ "message": "Nikal" })
    } catch (error) {
        console.log(error)
    }
}

module.exports.getUserProfile = async(req, res, next) => {
    // console.log('hello')
    res.status(200).json(req.user)
}


module.exports.logoutUser = async(req, res, next) => {
    res.clearCookie('token')

    const token = req.headers.authorization.split(' ')[1] //||req.cookies.token

    await blacklistTokenModel.create({ token })

    res.status(200).json({ message: 'Logged Out' })

}