const createError = require('http-errors');
const debug = require('debug')('app:module-posts-controller'); 
const { Response } = require('../common/response');
const { UserService } = require('./services'); 

module.exports.UsersController = {
    findMail: async (req, res) => {
        try {
            const { params: { id } } = req;
            const users = await UserService.findMail(id);
            if (!users) {
                // Response.error(res, new createError.NotFound());
                res.json(users);
            } else {
                // Response.success(res, 200, `Publicación ${id}`, post);
                res.json(users);
            }
        } catch (error) {
            debug(error);
            // Response.error(res);
            res.status(500).json({ message: "Internal server error"});
        }
    },
    createUser: async (req, res) => {
        try {
            const { body } = req;
            if (!body || Object.keys(body).length === 0) {
                // Response.error(res, new createError.BadRequest());
                res.json(posts);
            } else {
                const insertedUser = await UserService.createUser(body);
                // Response.success(res, 201, 'Publicación agregada', insertedId);
                res.json(insertedUser);
            }
        } catch (error) {
            debug(error);
            // Response.error(res);
            res.status(500).json({ message: "Internal server error"});
        }
    },
};
