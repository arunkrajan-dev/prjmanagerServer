const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/user.controller');

router.get('/test', product_controller.test);
module.exports = router;