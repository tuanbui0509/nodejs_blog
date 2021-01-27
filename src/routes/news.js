const express = require('express');
const router = express.Router();
// create variable controller
const newsController = require('../app/controllers/NewsController');
// use controller
router.use('/:slug', newsController.show);
router.use('/', newsController.index);
module.exports = router;
