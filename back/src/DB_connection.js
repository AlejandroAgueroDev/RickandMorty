require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, PORT, BDD } = process.env;
const FavoriteModel=require('./models/Favorite')
const UserModel=require('./models/User')

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${PORT}/${BDD}`,
   { logging: false, native: false }
);


// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

//
   UserModel(sequelize)
   FavoriteModel(sequelize)
//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;

User.belongsToMany(Favorite, {through: 'user_favorite'})
Favorite.belongsToMany(User, {through: 'user_favorite'})

module.exports = {
   User,
   Favorite,
   sequelize,
};
// module.exports=sequelize;