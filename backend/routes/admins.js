// routes/admin.js
const express = require('express');
const AdminModel = require('../models/admin');

const router = express.Router();

// Login endpoint
router.post('/login', (req, res) => {
  const { AdminName, password } = req.body;

  // Retrieve admin data by username
  AdminModel.getAdminByUsername(AdminName, (error, adminData) => {
    if (error) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    if (!adminData || adminData.password !== password) {
        console.log('Retrieved admin data from the database:', adminData);

      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful' });
  });
});

module.exports = router;
