const express = require('express');
const router = express.Router();

const project_controller = require('../controllers/project.controller');

router.get('/test', project_controller.test);
module.exports = router;

router.get('/', project_controller.project_list);
router.post('/create', project_controller.project_create);
router.get('/:id', project_controller.project_details);
router.put('/:id/update', project_controller.project_update);
router.delete('/:id/delete', project_controller.project_delete);
