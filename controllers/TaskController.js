const Task = require('../models/Task');

exports.createTask = async (req, res) => {
    try {
        const { title, description, dueDate, priority } = req.body;
        const userId = req.user.id;
    
        const task = new Task({ userId, title, description, dueDate, priority });
        await task.save();
    
        res.status(201).send(task);
      } catch (error) {
        res.status(500).send(error);
      }
};

exports.getTasks = async (req, res) => {
    try {
        const userId = req.user.id;
        const tasks = await Task.find({ userId });
    
        res.send(tasks);
      } catch (error) {
        res.status(500).send(error);
      }
};

exports.updateTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        const updates = req.body;
    
        const task = await Task.findByIdAndUpdate(taskId, updates, { new: true });
    
        if (!task) {
          return res.status(404).send({ message: 'Task not found' });
        }
    
        res.send(task);
      } catch (error) {
        res.status(500).send(error);
      }
};

exports.deleteTask = async (req, res) => {
    try {
        const { taskId } = req.params;
    
        const task = await Task.findByIdAndDelete(taskId);
    
        if (!task) {
          return res.status(404).send({ message: 'Task not found' });
        }
    
        res.send({ message: 'Deleted successfully' });
      } catch (error) {
        res.status(500).send(error);
    }
};
