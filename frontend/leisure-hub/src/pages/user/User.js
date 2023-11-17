import React, { useState } from 'react';
import './user.css'

const User = () => {

  const [values, setValues] = useState({
    username: '',
    email: '',
    phonenumber: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <div className="form-container">
      <h2>User Information Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
        />

        <div id="phoneNumbers">
          <label>Phone Number:</label>
         
            <div  className="phoneGroup">
              <input
                type="tel"
                name="number"
                placeholder="Phone Number"
                required
              />
             
            </div>
        
        </div>

      

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default User;
