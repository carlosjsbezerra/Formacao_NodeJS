const express = require('express');
const connection = require('./database');
const path = require('path');
const server = express();

const CategoriesController = require('./categories/CategoriesController');
const ArticleController = require('./articles/ArticlesController')

// configura pasta public
server.use(express.static('public'));
// habitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({ extended: true }));
// habilitar o uso arquivo json na aplicação
server.use(express.json());

// utilizando template engine
server.set('view engine', 'ejs');
server.set('views', path.resolve(__dirname, 'views'));


// Testando connection com database
connection.authenticate()
    .then(_ => console.log('Conexação -database- feita com sucesso!'))
    .catch(err => console.log(err));

    
// Router
server.use('/', CategoriesController);
server.use('/', ArticleController);

server.get('/', (req, res) => {
    res.render('index');
});

// ligar o servidor
server.listen(3000);
