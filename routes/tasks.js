const express = require('express');
const router = express.Router();
const taskController = require('../controllers/TaskController');
const firebaseUser = require('../middlewares/firebaseUserMiddleware');

router.post('/addtask', firebaseUser, taskController.createTask); // add Task
router.get('/', firebaseUser, taskController.getTasks); // get all Task
router.get('/tasks/:taskId', firebaseUser, taskController.getTaskById); //get Task by Id
router.put('/edit/:taskId', firebaseUser, taskController.updateTask); // edit Task by Id
router.delete('/delete/:taskId',firebaseUser, taskController.deleteTask); // delete Task by Id

module.exports = router;
