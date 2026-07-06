const express = require('express');
const router = express.Router();
const { asyncHandler } = require('../middleware/errorHandler');

const healthController = require('../controllers/healthController');

router.post('/report', asyncHandler(healthController.submitReport));
router.get('/reports', asyncHandler(healthController.getReports));
router.get('/reports/:id', asyncHandler(healthController.getReport));

module.exports = router;
