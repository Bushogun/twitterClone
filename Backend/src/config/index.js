require('dotenv').config();

module.exports.Config = {
    port: process.env.PORT,
    "host": "localhost",
    "user": "root",
    "password": "bushogun",
    "database": "posts"
}
