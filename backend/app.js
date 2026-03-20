const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const userRoutes = require('./routes/user');
const projectRoutes = require('./routes/project');

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/user', userRoutes);
app.use('/user/project', projectRoutes);

module.exports = app;