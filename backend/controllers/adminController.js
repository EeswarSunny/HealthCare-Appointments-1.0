const User = require('../models/userModel');

// Function to get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
};
exports.deleteUser = async (req, res) => {
  try {
      const userId = req.params.id;
      await User.findByIdAndDelete(userId);
      res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
      res.status(500).json({ message: 'Failed to delete user' });
  }
};
