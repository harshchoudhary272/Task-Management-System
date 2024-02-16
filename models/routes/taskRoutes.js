const express  = require('express');
const Task = require(`${__dirname}/models/taskModel.js`);

const router = express.Router();

router.get('/', async(req, res) => {
    try{
        const tasks = await Task.find({});
        res.status(200).json(tasks);

    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

//post request
router.post('/', async(req, res) => {
    try{
        const task = await Task.create(req.body);
        res.status(200).json(task);

    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

//get element by id
router.get('/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const task = await Task.findById(id);
        res.status(200).json(task);

    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

//updating task
router.patch('/:id', async(req, res) => {
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
})

//deleting task
router.delete('/:id', async(req, res) => {
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
})