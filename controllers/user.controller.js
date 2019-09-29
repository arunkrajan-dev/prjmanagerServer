const User = require('../models/user.model');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.user_details = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};

exports.user_list = function (req, res) {
    var userList = User.find();

    var queryParms = req.query;

    if (queryParms.searchKey) {
        userList.or([
            { 'firstName': { $regex: queryParms.searchKey, $options: 'i' } },
            { 'lastName': { $regex: queryParms.searchKey, $options: 'i' } }]);
    }

    if (queryParms.sortKey) {
        userList.sort([[queryParms.sortKey, 1]]);
    }

    userList.exec(function (err, users) {
        if (err) return next(err);
        res.send(users);
    });
};

exports.user_create = function (req, res) {
    let user = new User(
        req.body
    );

    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Created New User for employee Id -  ' + req.body.employeeId);
    })
};

exports.user_details = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};

exports.user_update = function (req, res) {
    user.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) return next(err);
        res.send('Updated User!');
    });
};

exports.user_delete = function (req, res) {
    user.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted User!');
    })
};