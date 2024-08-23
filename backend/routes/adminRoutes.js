const express = require('express');
const router = express.Router();
const { authenticateToken, authorizeAdmin } = require('../middleware/authMiddleware');

// Example admin-only route
router.get('/admin-data', authenticateToken, authorizeAdmin, (req, res) => {
    res.json({ message: 'This is admin data' });
});

module.exports = router;
