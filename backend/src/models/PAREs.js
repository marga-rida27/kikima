var Sequelize = require('sequelize');
var sequelize = require('./database');

const PARES = sequelize.define('PARES', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    numero:{
        type: Sequelize.INTEGER
    },
    nome:{
        type: Sequelize.STRING
    },
    descricao:{
        type: Sequelize.STRING
    },
    categoria:{
        type: Sequelize.STRING
    },
    imagem:{
        type: Sequelize.STRING
    },
    imagem_dois:{
        type: Sequelize.STRING
    }           
},
{
    timestamps: false,
});

module.exports = PARES