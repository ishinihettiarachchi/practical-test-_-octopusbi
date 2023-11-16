const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const adminRoutes = require('./routes/admins');
const db = require('./db')


const app = express();
const port = 3001;

app.use(bodyParser.json());

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


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


module.exports = { app};
