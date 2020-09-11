const express = require('express');
const router = express.Router();
const recordController = require('../app/api/controllers/records');
router.get('/', recordController.getAll);
router.post('/', recordController.create);
module.exports = router;
