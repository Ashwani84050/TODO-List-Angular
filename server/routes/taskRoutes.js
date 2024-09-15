const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

// Routes for handling tasks
router.get('/tasks', taskController.getTasks);
router.post('/task', taskController.createTask);
router.put('/task/:id', taskController.updateTask);
router.delete('/task/:id', taskController.deleteTask);

module.exports = router;
