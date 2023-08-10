const express = require('express');
const debug = require('debug')('app:main');

const { Config } = require('./src/config/index');
const { PostsApi } = require('./src/posts/index');
const { UsersApi } = require('./src/users/index');

const app = express();
// Configuración CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, OPTIONS'
    );
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Content-Type, Accept, X-Custom-Header, Authorization'
    );
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
    next();
  });
app.use(express.json());

//modulos
PostsApi(app);
UsersApi(app);
// NotFoundAPI(app);
// UsersAPI(app);

app.listen(Config.port, () => {
    debug(`Servidor escuchando en puerto ${Config.port}`)
});