const express = require('express');
const router = express.Router();
const controller = require('../../controllers/app/complaintController');

router.post('/closelist', controller.getAllClosures);

module.exports = router;
