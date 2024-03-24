const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id:{
         type:DataTypes.INTEGER,
         primaryKey: true,
         // autoIncrement: true,
         allowNull: false,
      },
      name:{
         type:DataTypes.STRING,
         allowNull: false,
      },
      status:{
         type:DataTypes.ENUM('Alive', 'Dead', 'unknown'),
         defaultValue: 'Alive',
         allowNull: false,
      },
      species:{
         //type:DataTypes.ENUM('Human', 'Alien', 'Humanoid', 'Cronenberg', 'Robot', 'Animal'),
         type:DataTypes.STRING,
         allowNull: false,
      },
      gender:{         
         type:DataTypes.ENUM('Male', 'Female', 'unknown', 'Genderless'),
         allowNull: false,
      },
      origin:{
         type:DataTypes.JSON,
         allowNull: false,
      },
      image:{
         type:DataTypes.STRING,
         allowNull: false,
      }
   }, { timestamps: false });
};
