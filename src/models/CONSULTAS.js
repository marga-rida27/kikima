var Sequelize = require('sequelize');
var sequelize = require('./database');

const CONSULTAS = sequelize.define('CONSULTAS', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    id_cliente:{
        type: Sequelize.INTEGER
    },
    data:{
        type: Sequelize.DATE
    },
    lista_pares:{
        type: Sequelize.STRING
    },
    observacoes:{
        type: Sequelize.STRING
    }
},
{
    timestamps: false,
});

module.exports = CONSULTAS