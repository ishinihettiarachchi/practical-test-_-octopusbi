import React, { useState } from 'react';
import './new.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const New = ({ hobbies }) => {
  const [values, setValues] = useState({
    hobby: '',
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the hobby already exists in the list
    if (hobbies.some((h) => h.Hobby.toLowerCase() === values.hobby.toLowerCase())) {
      alert('Hobby already exists!'); // You can replace this with your desired action
      return;
    }

    axios
      .post('http://localhost:3001/hobby', values)
      .then((res) => {
        console.log(res.data);
        navigate('/hobbies');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="center-content">
      <div className="form-container">
        <h2>Add Hobby</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="updatedHobby">Hobby:</label>
          <input
            type="text"
            id="updatedHobby"
            onChange={(e) => setValues({ ...values, hobby: e.target.value })}
            placeholder="Enter New hobby"
            required
          />

          <button type="submit">Add Hobby</button>
        </form>
      </div>
    </div>
  );
};

export default New;
