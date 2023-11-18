import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './userlist.css';
import {Link} from 'react-router-dom'

function UserList() {
  const [userWithHobbies, setUserWithHobbies] = useState([]);
  const [selectedHobby, setSelectedHobby] = useState(null);

  useEffect(() => {
    const apiUrl = 'http://localhost:3001/usersWithHobbies';

    axios.get(apiUrl)
      .then(response => {
        setUserWithHobbies(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const groupHobbiesByUser = () => {
    const groupedData = {};
    userWithHobbies.forEach(user => {
      if (!groupedData[user.userId]) {
        groupedData[user.userId] = {
          username: user.username,
          email: user.email,
          hobbies: [],
        };
      }
      groupedData[user.userId].hobbies.push(user.hobby);
    });
    return Object.values(groupedData);
  };

  const groupedData = groupHobbiesByUser();

  const handleHobbyChange = (event) => {
    setSelectedHobby(event.target.value);
  };

  // Filter users based on the selected hobby
  const filteredUsers = selectedHobby
    ? groupedData.filter(user => user.hobbies.includes(selectedHobby))
    : groupedData;

  return (
    // Inside your UserList component's return statement

<div className="container1">
<Link to="/user"><button className='add'>+ Add New User</button></Link>
  <div className="filter-container">
    <label htmlFor="hobbyFilter">Filter by Hobby:</label>
    <select id="hobbyFilter" onChange={handleHobbyChange}>
      <option value="">All Hobbies</option>
      {/* Add options dynamically based on available hobbies */}
      {userWithHobbies.map(user => (
        user.hobby && <option key={user.hobby} value={user.hobby}>{user.hobby}</option>
      ))}
    </select>
  </div>
  {filteredUsers.map(user => (
    <div className="user-card" key={user.userId}>
      <div className="user-info">
        <h2 className="username">{user.username}</h2>
        <p className="email">{user.email}</p>
        <p className="hobbies">{user.hobbies.join(', ')}</p>
      </div>
    </div>
  ))}
</div>

  );
}

export default UserList;
