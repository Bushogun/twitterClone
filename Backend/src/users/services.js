const { Database } = require('../database/index'); 
const DB_NAME = 'posts'; 
const TABLE_NAME = 'users'; 

const findMail = async (mail) => {
    const query = `SELECT id FROM ${DB_NAME}.${TABLE_NAME} WHERE email = '${mail}'`;
    return await Database(query, [mail]);
}

const createUser = async (user) => {
    const query = `INSERT INTO ${DB_NAME}.${TABLE_NAME} (name, email, password) VALUES ('${user.name}', '${user.email}', '${user.password}')`;
   return await Database(query);
}


module.exports.UserService = {
    findMail,
    createUser
};
