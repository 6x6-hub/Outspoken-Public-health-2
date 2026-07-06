const express = require('express');
const router = express.Router();
const { asyncHandler } = require('../middleware/errorHandler');

const authController = require('../controllers/authController');

router.post('/register', asyncHandler(authController.register));
router.post('/login', asyncHandler(authController.login));
router.post('/logout', asyncHandler(authController.logout));
router.post('/refresh', asyncHandler(authController.refresh));

module.exports = router;
