const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TaskSchema = new Schema({
    taskId: {type: String, required: true, max: 100},
    parentId: {type: String, required: true, max: 100},
    projectId: {type: String, required: true, max: 100},
    task: {type: String, required: true, max: 100},
    startDate: {type: date, required: true, max: 100},
    endDate: {type: date, required: true, max: 100},
    priority: {type: Number, required: true, max: 100},
    status: {type: Number, required: true, max: 100},

});

module.exports = mongoose.model('Task', TaskSchema);