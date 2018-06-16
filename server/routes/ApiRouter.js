var express = require('express');
var router = express.Router();
var ApiController = require('../controllers/ApiController');

router.post('/create_campus', ApiController.createCampus);
router.post('/create_labor', ApiController.createLabor);

module.exports = router;
