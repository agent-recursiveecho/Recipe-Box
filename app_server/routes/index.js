const express = require('express');
const router = express.Router();

const mainController = require('../controllers/main');

router.get('/', mainController.index);
router.get('/recipe/:id', mainController.recipe);

module.exports = router;
