const User = require('../models/user.model');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.user_create = function (req, res, next) {
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