const mysql = require('mysql2')
const debug = require('debug')('app:module-database');

const { Config } = require('../config/index');

let connection = null;

module.exports.Database = (query) => new Promise(async (resolve, reject) => {
    try {
        if (!connection) {
            connection = mysql.createConnection({
                host: Config.host,
                user: Config.user,
                password: Config.password,
                database: Config.database
            });

            connection.connect((error) => {
                if (error) {
                    debug('Error al conectar a la base de datos MySQL:', error);
                    reject(error);
                } else {
                    debug('Nueva conexión realizada con MySQL');
                }
            });
        } else {
            debug('Reutilizando conexión');
        }

        connection.query(query, (error, results) => {
            if (error) {
                debug('Error en la consulta MySQL:', error);
                reject(error);
            } else {
                resolve(results);
            }
        });
    } catch (error) {
        reject(error);
    }
});
