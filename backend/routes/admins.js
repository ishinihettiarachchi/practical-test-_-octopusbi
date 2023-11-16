
const express = require('express');
const router = express.Router();
const AdminModel = require('../models/admin');

// Login endpoint
router.post('/login', async (req, res) => {
  try {
    const { AdminName, password } = req.body;

    // Retrieve admin data by username
    const adminData = await AdminModel.getAdminByUsername(AdminName);

    if (!adminData) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare passwords
    const passwordMatch = await AdminModel.comparePasswords(password, adminData.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token or any other authentication logic here

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error in login route:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

module.exports = router;
