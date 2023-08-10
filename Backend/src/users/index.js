const express = require('express');

const { UsersController } = require('./controller')

const router = express.Router();

module.exports.UsersApi = (app) => {
    app.use(express.json());
    router
    .get('/signin/:mail', UsersController.findMail)                   //http://localhost:3000/login/signin/sotto_j@hotmail.com
    .post('/signup', UsersController.createUser);               //http://localhost:3000/login/signup

    app.use('/login', router);
}