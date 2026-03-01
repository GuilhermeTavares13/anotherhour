const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

router.post('/login', userController.postLogin);

router.post('/create-user', userController.postCreateUser);

module.exports = router;