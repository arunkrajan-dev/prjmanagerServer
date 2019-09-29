const Task = require('../models/task.model');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.task_details = function (req, res) {
    Task.findById(req.params.id, function (err, task) {
        if (err) return next(err);
        res.send(task);
    })
};

exports.task_list = function (req, res) {
    var taskList = Task.find();

    taskList.exec(function (err, tasks) {
        if (err) return next(err);
        res.send(tasks);
    });
};

exports.task_create = function (req, res) {
    let task = new Task(
        req.body
    );

    task.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Created New Task for employee Id -  ' + req.body.employeeId);
    })
};

exports.task_details = function (req, res) {
    Task.findById(req.params.id, function (err, task) {
        if (err) return next(err);
        res.send(task);
    })
};

exports.task_update = function (req, res) {
    task.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, task) {
        if (err) return next(err);
        res.send('Updated Task!');
    });
};

exports.task_delete = function (req, res) {
    task.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted Task!');
    })
};