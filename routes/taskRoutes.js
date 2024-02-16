const express  = require('express');
// const Task = require(`../models/taskModel.js`);
const {getAllTasks, createTask, getTask, updateTask, deleteTask} = require(`../controllers/taskController.js`);
const router = express.Router();

//get all tasks
router.get('/', getAllTasks)

//post task
router.post('/', createTask)

//get element by id
router.get('/:id', getTask)

//updating task
router.patch('/:id', updateTask)

//deleting task
router.delete('/:id', deleteTask)

module.exports = router;