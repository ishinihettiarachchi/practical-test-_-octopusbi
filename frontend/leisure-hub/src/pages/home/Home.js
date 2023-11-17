import React, { useEffect, useState } from 'react';
import './home.css'
import hobby from '../../images/hobby.png'; // Import your image
import user from '../../images/user.png'; // Import your image
import {Link} from 'react-router-dom'


function Home() {
  const [adminName, setAdminName] = useState('');
  useEffect(() => {
    const fetchAdminName = async () => {
      // Fetch the token from localStorage
      const token = localStorage.getItem('adminToken');
  
      if (token) {
        // Decode the token to get admin data
        const decodedToken = await decodeToken(token);
        console.log(decodedToken);
        setAdminName(decodedToken.adminName);
        console.log(decodedToken);
      }
    };
  
    fetchAdminName();
  }, []);
  

  // Function to decode the JWT token
const decodeToken = (token) => {
  return new Promise((resolve, reject) => {
    try {
      // Decode the token using the base64Url encoding
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      const decoded = JSON.parse(atob(base64));

      console.log('Decoded Token:', decoded); // Log the decoded token

      resolve(decoded);
    } catch (error) {
      console.error('Error decoding token:', error);
      reject(error);
    }
  });
};


  return (
    <div className='home'>
        <h1>Leisure<span>Hub</span></h1>
        <h2>Hello {adminName}..!</h2>
    <div className='home-container'>

    <div className='container'>
    <Link to="/hobbies"><div className='hobby'>
        <h3>Hobbies</h3>
        <img src={hobby}/>
    </div></Link>
    </div>

    <div className='container'>
    <Link to="/users"><div className='user'>
        <h3>Add Users</h3>
        <img src={user}/>
    </div>
    </Link>
    </div>
    </div>
    </div>
  )
}

export default Home 