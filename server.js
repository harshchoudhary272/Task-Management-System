const dotenv = require('dotenv')
const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require(`${__dirname}/routes/taskRoutes.js`);
const errorHandler = require(`${__dirname}/handlers/errorHandler.js`);
const app = express();

dotenv.config({path: `${__dirname}/config.env`});

app.use(express.json())


const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT || 3000

//routes
app.use('/api/tasks', taskRoutes);
//get request
// app.get('/tasks', (req, res) => {
//     res.send('hello node api')
// })

// hanldes runtime error //
app.use(errorHandler);
//fetch data from database
//get request


// mongoose.set('strictQuery', false)

//connecting to db
mongoose.connect(MONGODB_URI)
.then(() => {
    console.log('Connected to mongodb database..')
}).catch((error) => {
    console.log(error)
})


// listening to the application
app.listen(PORT, () => {
    console.log(`Node api app is running on port ${PORT}...`)
})
