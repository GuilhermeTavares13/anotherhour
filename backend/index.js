require('dotenv').config();
const app = require('./app');

// Models
const User = require('./models/user');
const Project = require('./models/project');
const ProjectItem = require('./models/projectitem');
const sequelize = require('./util/database');

// Associations
Project.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Project);
ProjectItem.belongsTo(Project, { constraints: true, onDelete: 'CASCADE' });
Project.hasMany(ProjectItem);

sequelize
  .sync()
  .then(result => {
    app.listen(3000)
  });
