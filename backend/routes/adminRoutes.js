const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const adminController = require('../controllers/adminController');
// Example admin-only route
router.get('/users', authMiddleware.authenticateToken, authMiddleware.authorizeAdmin, adminController.getUsers);

module.exports = router;
