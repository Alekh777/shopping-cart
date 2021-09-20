const Sequelize = require('sequelize')

const db = new Sequelize('shopdb', 'shopper', 'shoppass', {
    host: 'localhost',
    dialect: 'mysql'
})

const User = db.define('users', {
    id:{
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
})

const Product = db.define('products', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    manufacturer: Sequelize.DataTypes.STRING,
    price: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    }
})

exports = module.exports = {
    User, Product
}