const { Database } = require('../database/index'); 

const TABLE_NAME = 'posts'; 

const getAll = async () => {
//     SELECT p.*, u.name as user_name
// FROM posts p
// INNER JOIN users u ON p.user_id = u.id;

const query = `SELECT p.*, u.name as user_name FROM ${TABLE_NAME} p INNER JOIN users u ON p.user_id = u.id;`;

    return await Database(query);
}

const getPostById = async (id) => {
    const query = 'SELECT * FROM ' + TABLE_NAME + ' WHERE user_id = ' + id;
    return await Database(query, [id]);
}

const createPost = async (postCreate) => {
    const query = `INSERT INTO ` + TABLE_NAME + '.' + TABLE_NAME + `(title, content, user_id) VALUES ('${postCreate.title}', '${postCreate.content}', ${postCreate.user_id})`;
    return await Database(query);
}


module.exports.PostsService = {
    getAll,
    getPostById,
    createPost
};
