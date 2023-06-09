const Sequelize = require('sequelize');
const database = require('../db/db');
const Noticia = database.define('noticia', {
 id_noticia: {
 type: Sequelize.INTEGER,
 autoIncrement: true,
 allowNull: false,
 primaryKey: true
 },
 manchete: {
 type: Sequelize.STRING,
 allowNull: false,
 },
 imagem:{
 type: Sequelize.STRING,
 allowNull: false,
 },
 lide:{
 type: Sequelize.STRING,
 allowNull: false,
 }
}, {database,modelname:'noticia',tableName: 'noticias'})
module.exports = Noticia;