const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const firebaseUser = require('../middlewares/firebaseAuthMiddleware');

router.post('/register', firebaseAuthMiddleware, authController.registerUser);
router.post('/login', firebaseAuthMiddleware, authController.loginUser);

module.exports = router;
