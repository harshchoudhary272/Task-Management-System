const Task = require(`../models/taskModel.js`)

// get all tasks
const getAllTasks = async(req, res) => {
    try{
        const tasks = await Task.find({});
        res.status(200).json(tasks);

    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
}

// post a task
const createTask = async(req, res) => {
    try{
        const task = await Task.create(req.body);
        res.status(200).json(task);

    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
}

// get task by id
const getTask = async(req, res) => {
    try{
        const {id} = req.params;
        const task = await Task.findById(id);
        res.status(200).json(task);

    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
}

// update a task
const updateTask = async(req, res) => {
    try{
        const {id} = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body);
    //if Id does not match//
    if(!task){
        res.status(404).json({message: `Cannot find task with id: ${id}`});
    }
    const UpdatedData = await Task.findById(id);
    res.status(200).json(UpdatedData);

    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
}

// deleting a task 
const deleteTask = async(req, res) => {
    try{
        const {id} = req.params;
        const task = await Task.findByIdAndDelete(id);
        //if id does not match
        if(!task){
            res.status(404).json({message: `Cannot find task with id: ${id}`});
        }
        res.status(200).json(task);

    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}