require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

// Models
const User = require('./models/user')
const Project = require('./models/project')
const ProjectItem = require('./models/projectitem')

const sequelize = require('./util/database')

const userRoutes = require('./routes/user')
const projectRoutes = require('./routes/project')

const app = express()

app.use(bodyParser.json())

app.use('/user', userRoutes)
app.use('/user/project', projectRoutes)

// Associations
Project.belongsTo(User, {constraints: true, onDelete: 'CASCADE'})
User.hasMany(Project)
ProjectItem.belongsTo(Project, {constraints: true, onDelete: 'CASCADE'})
Project.hasMany(ProjectItem)

sequelize
    .sync()
    .then(result => {
        app.listen(3000)
    })
