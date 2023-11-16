// models/admin.js
const db = require('../db');

const AdminModel = {
  // Function to retrieve admin data by username
  getAdminByUsername: (adminName, callback) => {
    const query = 'SELECT * FROM admin WHERE AdminName = ?';

    db.query(query, [adminName], (error, results) => {
      if (error) {
        console.error('Error retrieving admin data:', error);
        return callback(error, null);
      }

      const adminData = results[0];
      console.log('Retrieved admin data from the database:', adminData);

      callback(null, adminData);
    });
  },
};

module.exports = AdminModel;
