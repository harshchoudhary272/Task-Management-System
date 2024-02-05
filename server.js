const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Task = require(`${__dirname}/models/taskModel`)

app.use(express.json())

//routes
//get request
app.get('/tasks', (req, res) => {
    res.send('hello node api')
})

//post request
app.post('/tasks', async(req, res) => {
    try{
        const task = await Task.create(req.body)
        res.status(200).json(task)

    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//connecting to db
mongoose.connect('mongodb+srv://hcprofession007:harsh007@taskclusterapi.htmabw2.mongodb.net/Node-api?retryWrites=true&w=majority')
.then(() => {
    console.log('Connected to mongodb database..')
}).catch((error) => {
    console.log(error)
})


// listening to the application
app.listen(3000, () => {
    console.log('Node api app is running on port 3000...')
})
