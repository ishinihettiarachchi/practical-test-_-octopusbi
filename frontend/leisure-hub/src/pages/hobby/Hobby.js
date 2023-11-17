import React, { useState, useEffect } from 'react';
import './hobby.css';
import axios from 'axios';
import {Link, useParams } from 'react-router-dom'

export default function Hobby() {

    const { id } = useParams();

  const [hobbies, setHobbies] = useState([]);
  const [values, setValues] = useState({
    hobby: '',
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('http://localhost:3001/')
      .then((res) => setHobbies(res.data))
      .catch((err) => console.log(err));
  };

  

  const handleDelete = (id) => {
    axios
      .delete('http://localhost:3001/delete/' + id)
      .then((res) => {
        console.log(res);
        // Update the state by filtering out the deleted hobby
        setHobbies(hobbies.filter((hobby) => hobby.HobbyId !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='hobby'>
      <h2>Hobbies</h2>
      <div className='hobby-input'>
        
        <div className='hobby-form'>
         
            <Link to ='/new'><button className='add'>+ Add New Hobby</button></Link>
         
        </div>
      </div>

      <table>
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Action 1</th>
          <th>Action 2</th>
        </thead>
        <tbody>
          {hobbies.map((hobby, index) => {

            return (
              <tr key={index}>
                <td>{hobby.HobbyId}</td>
                <td>{hobby.Hobby}</td>
                <td>
                <Link to ={`/update/${hobby.HobbyId}`}><button className='edit'>Edit</button></Link>
                </td>
                <td>
                  <button
                    className='delete'
                    onClick={() => handleDelete(hobby.HobbyId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Link to ='/'><button className='add'>Back to Home</button></Link>
    </div>
  );
}
