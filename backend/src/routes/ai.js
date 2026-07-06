const express = require('express');
const router = express.Router();
const { asyncHandler } = require('../middleware/errorHandler');

const aiController = require('../controllers/aiController');

router.post('/chat', asyncHandler(aiController.chat));
router.post('/analyze-image', asyncHandler(aiController.analyzeImage));
router.post('/analyze-document', asyncHandler(aiController.analyzeDocument));
router.post('/symptom-check', asyncHandler(aiController.symptomCheck));

module.exports = router;
