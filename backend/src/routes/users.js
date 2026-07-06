const express = require('express');
const router = express.Router();
const { asyncHandler } = require('../middleware/errorHandler');

const usersController = require('../controllers/usersController');

router.get('/profile', asyncHandler(usersController.getProfile));
router.put('/profile', asyncHandler(usersController.updateProfile));
router.delete('/account', asyncHandler(usersController.deleteAccount));

module.exports = router;
