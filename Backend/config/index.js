const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    PORT: process.env.PORT || 2000,
    DB_URL: process.env.DB_URL
}