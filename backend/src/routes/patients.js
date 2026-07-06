const express = require('express');
const router = express.Router();
const { asyncHandler } = require('../middleware/errorHandler');

const patientsController = require('../controllers/patientsController');

router.get('/:id', asyncHandler(patientsController.getPatient));
router.post('/:id/vaccination', asyncHandler(patientsController.addVaccination));
router.post('/:id/nutrition', asyncHandler(patientsController.addNutrition));

module.exports = router;
