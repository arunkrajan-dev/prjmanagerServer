const express = require('express');
const bodyParser = require('body-parser');

const user = require('./routes/user.route');
const app = express();

//Connect to DB
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/ProjectsDB').then(
    () => { console.log('Connected to ProjectsDB') },
    err => { console.log('Error connecting to ProjectsDB. Error: ' + err) }
  );
  
app.use('/users', user);
let port = 4001;

app.listen(port, () => {
    console.log('Project Manager Server is Running on Port ' + port);
});
