const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const db = require('./db')
const jwt = require('jsonwebtoken');


const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors())
app.use(express.json())

app.post('/admin/login', (req, res) => {
  const { adminName, password } = req.body;
  const sql = "SELECT * FROM admin WHERE AdminName = ? AND Password = ?";

  db.query(sql, [adminName, password], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (result.length > 0) {
      const adminData = result[0];

      const token = jwt.sign({ adminId: adminData.AdminId }, 'leisurehub12', {
        expiresIn: '1h', 
      });

      return res.status(200).json({ message: 'Login successful', token, adminData });
    } else {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
  });
});
app.get('/',(req,res)=>{
    const sql = "SELECT * FROM hobby";
    db.query(sql,(err,result)=>{
        if(err) return res.json({Message: "Error inside the server"});
        return res.json(result);
    })
})

app.post('/hobby', (req, res) => {
    const sql = "INSERT INTO hobby (Hobby) VALUES (?)";
  
    const values = [
      req.body.hobby
    ];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      return res.status(201).json({ message: 'Hobby added successfully', result });
    });
  });

  app.get('/hobbies/:id',(req,res)=>{
    const sql = "SELECT * FROM hobby WHERE HobbyId=?";
    const id = req.params.id;

    db.query(sql,[id],(err,result)=>{
      if(err) return res.json({Message:"error inside server"});
      return res.json(result);
    })
  })
  
  app.put('/update/:id', (req, res) => {
    const sql = "UPDATE hobby SET `Hobby`=? WHERE HobbyId = ?";
    const id = req.params.id;
  
    db.query(sql, [req.body.hobby, id], (err, result) => {
      if (err) {
        console.error(err);
        return res.json({ Message: "Error inside server" });
      }
      return res.json(result);
    });
  });

  
  app.delete('/delete/:id',(req,res)=>{
    const sql = "DELETE FROM hobby WHERE HobbyID=?";
    const id = req.params.id;
  
    db.query(sql, [id], (err, result) => {
      if (err) {
        console.error(err);
        return res.json({ Message: "Error inside server" });
      }
      return res.json(result);
    });
  }
  )

  app.post('/user', (req, res) => {
    const sql = "INSERT INTO user (username, email, phonenumber) VALUES (?, ?, ?)";
    
    const values = [
      req.body.username,
      req.body.email,
      req.body.phonenumber
    ];
    
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    
      return res.status(201).json({ message: 'User added successfully', result });
    });
  });
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


module.exports = { app};
