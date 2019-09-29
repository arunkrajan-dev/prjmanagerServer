const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let port = 4001;

app.listen(port, () => {
    console.log('Project Manager Server is Running on Port ' + port);
});
