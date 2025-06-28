var Sequelize = require('sequelize');
var sequelize = require('./database');

const CONSULTA_PARES = sequelize.define('CONSULTA_PARES', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    id_consulta:{
        type: Sequelize.INTEGER
    },
    id_par:{
        type: Sequelize.INTEGER
    }
},
{
    timestamps: false,
});

module.exports = CONSULTA_PARES