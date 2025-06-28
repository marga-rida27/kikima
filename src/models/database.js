var Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'kikima',
    'postgres',
    'kikima2015',
    {
        host: 'localhost',
        port: '5432',
        dialect: 'postgres'
    }
);
module.exports = sequelize;