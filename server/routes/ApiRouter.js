var express = require('express');
var router = express.Router();
var ApiController = require('../controllers/ApiController');

router.post('/create_campus', ApiController.createCampus);
router.post('/create_labor', ApiController.createLabor);
router.post('/create_project', ApiController.createProject);
router.post('/create_all', ApiController.createAll);
router.get('/get_projects', ApiController.getProjects);
router.get('/get_followers', ApiController.getLabors);
router.get('/get_campuses', ApiController.getCampuses);

module.exports = router;
