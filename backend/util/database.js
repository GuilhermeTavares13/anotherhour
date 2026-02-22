const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_LOGIN,
    process.env.DATABASE_PASSWORD, 
    {
        dialect: 'mysql',
        host: 'localhost'
    }
);

module.exports = sequelize;