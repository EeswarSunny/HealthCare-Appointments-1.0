const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

module.exports = {
    authenticateToken: (req, res, next) => {
        const token = req.headers['authorization'];
        if (!token) return res.status(401).json({ message: 'No token provided' });

        jwt.verify(token, 'your_jwt_secret', (err, decoded) => {
            if (err) return res.status(500).json({ message: 'Failed to authenticate token' });
            req.userId = decoded.id;
            next();
        });
    },

    authorizeAdmin: async (req, res, next) => {
        try {
            const user = await User.findById(req.userId);
            if (user.role !== 'admin') {
                return res.status(403).json({ message: 'Access denied' });
            }
            next();
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
};
