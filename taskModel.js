const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Enter title of the task']
        },

        desc: {
            type: String,
            required: [true, 'A task must have description']
        },

        due_date: {
            type: Date,
            required: [true, 'A task must have a due date']
        }
    },

    {
        timestamps: true
    }

)

const task = mongoose.model('task', taskSchema);

module.exports = task;