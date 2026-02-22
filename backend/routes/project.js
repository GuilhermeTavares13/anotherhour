const express = require('express');

const projectController = require('../controllers/project');

const router = express.Router();

router.get('/', projectController.getAllProjects);

router.get('/:id', projectController.getProject);

router.post('/create-project', projectController.postCreateProject)

module.exports = router