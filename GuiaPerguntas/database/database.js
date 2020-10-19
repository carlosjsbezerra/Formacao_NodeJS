const Sequelize = require('sequelize');

const connection = new Sequelize('quiaperguntas','root','root',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;