const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    userId: {type: String, required: true, max: 100},
    firstName: {type: String, required: true, max: 100},
    lastName: {type: String, required: true, max: 100},
    employeeId: {type: String, required: true, max: 100},
    projectId: {type: String, required: true, max: 100},
    taskId: {type: String, required: true, max: 100}
});

module.exports = mongoose.model('User', UserSchema);