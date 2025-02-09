const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            required: true,
            type: String,
            minlength: [3, 'firstname must be at least 3 character']
        },
        lastname: {
            type: String,
            minlength: [3, 'lastname must be at least 3 character']
        }
    },
    email: {
        required: true,
        unique: true,
        type: String,
        minlength: [5, 'email must be at least 5 character']
    },
    password: {
        type: String,
        required: true,
        select: false
    }
})

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24hr' })
    return token
}

userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10)
}

const userModel = mongoose.model('user', userSchema)

module.exports = userModel