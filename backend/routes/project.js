const express = require('express');

const projectController = require('../controllers/project');

const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.get('/', isAuth, projectController.getAllProjects);

router.get('/:id', isAuth, projectController.getProject);

router.post('/create-project', isAuth, projectController.postCreateProject);

router.post('/delete-project/:id', isAuth, projectController.postDeleteProject);

module.exports = router