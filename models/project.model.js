const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProjectSchema = new Schema({
    projectId: {type: String, required: true, max: 100},
    project: {type: String, required: true, max: 100},
    startDate: {type: date, required: true, max: 100},
    endDate: {type: date, required: true, max: 100},
    priority: {type: Number, required: true, max: 100},
});

module.exports = mongoose.model('Project', ProjectSchema);