const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const userRoutes = require('./routes/user');
const projectRoutes = require('./routes/project');

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRoutes);
app.use('/user/project', projectRoutes);

module.exports = app;