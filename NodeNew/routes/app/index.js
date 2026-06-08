const express = require('express');
const router = express.Router();
const controller = require('../../controllers/app/complaintController');

router.post('/closelist', controller.getAllClosures);
router.post('/add', controller.onSaveData);
router.post('/update', controller.onEditData);
router.post('/delete', controller.onDeleteData);

module.exports = router;
