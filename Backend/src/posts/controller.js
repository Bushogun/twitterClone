const createError = require('http-errors');
const debug = require('debug')('app:module-posts-controller'); 
const { Response } = require('../common/response');
const { PostsService } = require('./services'); 

module.exports.PostsController = {
    getAllPosts: async (req, res) => {
        try {
            const posts = await PostsService.getAll();
            // Response.success(res, 200, 'Lista de publicaciones', posts);
            res.json(posts);
        } catch (error) {
            debug(error);
            res.status(500).json({ message: "Internal server error"});
        }
    },
    getPostById: async (req, res) => {
        try {
            const { params: { id } } = req;
            const posts = await PostsService.getPostById(id);
            if (!posts) {
                // Response.error(res, new createError.NotFound());
                res.json(posts);
            } else {
                // Response.success(res, 200, `Publicación ${id}`, post);
                res.json(posts);
            }
        } catch (error) {
            debug(error);
            // Response.error(res);
            res.status(500).json({ message: "Internal server error"});
        }
    },
    createPost: async (req, res) => {
        try {
            const { body } = req;
            if (!body || Object.keys(body).length === 0) {
                // Response.error(res, new createError.BadRequest());
                res.json(posts);
            } else {
                const insertedId = await PostsService.createPost(body);
                // Response.success(res, 201, 'Publicación agregada', insertedId);
                res.json(insertedId);
            }
        } catch (error) {
            debug(error);
            // Response.error(res);
            res.status(500).json({ message: "Internal server error"});
        }
    },
};
