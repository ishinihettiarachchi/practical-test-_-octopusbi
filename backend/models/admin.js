// model/admin.js
const bcrypt = require('bcrypt');
const { db } = require('../index');

const AdminModel = {
  // Function to retrieve admin data by username
  getAdminByUsername: async (AdminName) => {
    try {
      const query = 'SELECT * FROM admin WHERE AdminName = ?';
      console.log('Query:', query);
      const [results] = await db.promise().query(query, [AdminName]);
      return results[0];
    } catch (error) {
      console.error('Error retrieving admin data:', error);
      throw error;
    }
  },

  // Function to compare passwords using bcrypt
  comparePasswords: async (userInputPassword, hashedPassword) => {
    try {
      return await bcrypt.compare(userInputPassword, hashedPassword);
    } catch (error) {
      console.error('Error comparing passwords:', error);
      throw error;
    }
  },
};

module.exports = AdminModel;
