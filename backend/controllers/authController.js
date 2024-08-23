const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

// Register a new user
exports.register = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = new User({ username, password });
        await user.save();
        res.status(201).json({ message: 'User Registered Successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Register a new admin
exports.registerAdmin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = new User({ username, password, role: 'admin' });
        await admin.save();
        res.status(201).json({ message: 'Admin registered' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


// Login user
exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user || !(await bcryptjs.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Logout user (invalidate token on client side)
exports.logout = (req, res) => { 
    res.json({ message: 'User logged out' });
};
