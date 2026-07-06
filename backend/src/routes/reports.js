const express = require('express');
const router = express.Router();
const { asyncHandler } = require('../middleware/errorHandler');

const reportsController = require('../controllers/reportsController');

router.get('/dashboard', asyncHandler(reportsController.getDashboard));
router.get('/summary', asyncHandler(reportsController.getSummary));
router.post('/generate', asyncHandler(reportsController.generateReport));

module.exports = router;
