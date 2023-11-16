const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const adminRoutes = require('./routes/admins');

const app = express();
const port = 3001;

app.use(bodyParser.json());

// Use the login route
app.use('/api', adminRoutes);

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ik881455Hp#it',
  database: 'leisurehub',
});

db.connect((err) => {
  if (err) {
    console.error('Unable to connect to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = { app, db };
