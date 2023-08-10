const express = require('express');

const { PostsController } = require('./controller')

const router = express.Router();

module.exports.PostsApi = (app) => {
    app.use(express.json());
    router
    .get('/see-all', PostsController.getAllPosts)                   //http://localhost:3000/app/see-all/
    .get('/my-publications/:id', PostsController.getPostById)       //http://localhost:3000/app/my-publications/12
    .post('/create', PostsController.createPost);                   //http://localhost:3000/app/create

    app.use('/app', router);
}