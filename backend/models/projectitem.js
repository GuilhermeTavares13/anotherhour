const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const ProjectItem = sequelize.define('projectItem', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    timeFocused: Sequelize.DOUBLE,
    completed: Sequelize.BOOLEAN 
});


module.exports = ProjectItem;