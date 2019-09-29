const Project = require('../models/project.model');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.project_details = function (req, res) {
    Project.findById(req.params.id, function (err, project) {
        if (err) return next(err);
        res.send(project);
    })
};

exports.project_list = function (req, res) {
    var projectList = Project.find();

    projectList.exec(function (err, projects) {
        if (err) return next(err);
        res.send(projects);
    });
};

exports.project_create = function (req, res) {
    let project = new Project(
        req.body
    );

    project.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Created New Project for employee Id -  ' + req.body.employeeId);
    })
};

exports.project_details = function (req, res) {
    Project.findById(req.params.id, function (err, project) {
        if (err) return next(err);
        res.send(project);
    })
};

exports.project_update = function (req, res) {
    project.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, project) {
        if (err) return next(err);
        res.send('Updated Project!');
    });
};

exports.project_delete = function (req, res) {
    project.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted Project!');
    })
};