import React, { useState } from 'react';
import './user.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: '',
    email: '',
    phonenumber: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post('http://localhost:3001/user', values)
    .then((res) => {
      console.log(res.data);
      console.log('User added successfully')
      navigate('/userlist')
    })
    .catch((err) => console.log(err));
  };

  return (
    <div className='form'>
    <div className="form-container1">
      <h2>User Information Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          onChange={(e) => setValues({ ...values, username: e.target.value })}

          id="username"
          name="username"
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          onChange={(e) => setValues({ ...values, email: e.target.value })}

          id="email"
          name="email"
          required
        />

        <div id="phoneNumbers">
          <label>Phone Number:</label>
         
            <div  className="phoneGroup">
              <input
                type="tel"
                onChange={(e) => setValues({ ...values, phonenumber: e.target.value })}

                name="number"
                placeholder="Phone Number"
                required
              />
             
            </div>
        
        </div>

      

        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default User;
