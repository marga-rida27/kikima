var Sequelize = require('sequelize');
var sequelize = require('./database');

const CLIENTES = sequelize.define('CLIENTES', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    foto:{
        type: Sequelize.STRING
    },
    nome:{
        type: Sequelize.STRING
    },
    genero:{
        type: Sequelize.STRING
    },
    data_nascimento:{
        type: Sequelize.DATE
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    },
    telemovel:{
        type: Sequelize.STRING
    }            
},
{
    timestamps: false,
});

module.exports = CLIENTES