const express = require('express');
const router = express.Router();
// create variable controller
const newsController = require('../app/controllers/NewsController');
// use controller
router.get('/:slug', newsController.show);
router.get('/', newsController.index);
module.exports = router;
