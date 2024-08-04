const express = require('express');
const router = express.Router();
const taskController = require('../controllers/TaskController');
const firebaseUser = require('../middlewares/firebaseUserMiddleware');

router.post('/', firebaseUser, taskController.createTask);
router.get('/', firebaseUser, taskController.getTasks);
router.put('/:taskId', firebaseUser, taskController.updateTask);
router.delete('/:taskId',firebaseUser, taskController.deleteTask);

module.exports = router;
