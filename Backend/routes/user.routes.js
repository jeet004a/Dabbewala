const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const userController = require('../controller/user.controller')
const Auth = require('../middlewares/auth.middlewares')

router.post('/register', [
    body('email').isEmail().withMessage('invalid email address'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('firstname must be atleast 3 charcter'),
    body('password').isLength({ min: 6 }).withMessage('Password Must be 6 character long')
], userController.registerUser)

router.post('/login', [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password Must be 6 character long')
], userController.loginUser)

router.get('/profile', Auth.authUser, userController.getUserProfile)

router.get('/logout', Auth.authUser, userController.logoutUser)


module.exports = router