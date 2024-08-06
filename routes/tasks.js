const express = require('express');
const router = express.Router();
const taskController = require('../controllers/TaskController');
const firebaseUser = require('../middlewares/firebaseUserMiddleware');

router.post('/addtask', firebaseUser, taskController.createTask);
router.get('/', firebaseUser, taskController.getTasks);
router.put('/edit/:taskId', firebaseUser, taskController.updateTask);
router.delete('/delete/:taskId',firebaseUser, taskController.deleteTask);

module.exports = router;
