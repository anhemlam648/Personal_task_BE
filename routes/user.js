const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const firebaseUser = require('../middlewares/firebaseUserMiddleware');

router.post('/register', firebaseUser, UserController.registerUser);
router.post('/login', firebaseUser, UserController.loginUser);

module.exports = router;
