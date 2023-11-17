import React, { useEffect, useState } from 'react';
import './update.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [updatedHobby, setUpdatedHobby] = useState('');

  useEffect(() => {
    // Fetch the details of the hobby with the specified id
    axios.get(`http://localhost:3001/hobbies/${id}`)
      .then((res) => {
        // Set the current value of the hobby in the state
        setUpdatedHobby(res.data.Hobby);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    
    // Send the updated hobby value to the server
    axios.put(`http://localhost:3001/update/${id}`, { hobby: updatedHobby })
      .then(res => {
        console.log(res);
        navigate('/hobbies');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="center-content">
      <div className="form-container">
        <h2>Update Hobby</h2>
        <form onSubmit={handleUpdate}>
          <label htmlFor="updatedHobby">Hobby:</label>
          <input
            type="text"
            id="updatedHobby"
            value={updatedHobby}
            onChange={(e) => setUpdatedHobby(e.target.value)}
            placeholder="Enter the updated hobby"
            required
          />

          <button type="submit">Update Hobby</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
