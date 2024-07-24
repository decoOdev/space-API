const { DataTypes } = require('sequelize')
const sequelize = require('../config/sequelize')


const Spaceship = sequelize.define('spaceship', {
  name: DataTypes.STRING,
  capacity: DataTypes.STRING,

})


module.exports = Spaceship