// src/components/Login.js
import React, { useState } from 'react';
import '../login/login.css'; // Import the CSS file
import loginImage from '../../images/login-image.jpg'; // Import your image
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    // Make a POST request to your backend API
    axios.post('http://localhost:3001/admin/login', { adminName: username, password })
      .then(response => {
        console.log('Login Successful:', response.data);
        localStorage.setItem('adminToken', response.data.token);
        
        navigate('/')
        // Here, you can handle the successful login, such as redirecting the user to another page.
      })
      .catch(error => {
        console.error('Login Failed:', error.response.data);
        // Handle login failure, show an error message, etc.
      });
  };
  
  return (
    <div className='login'>
      <h1>Leisure<span>Hub</span></h1>
    <div className="login-container">
      <div className="image-container">
        <img src={loginImage} alt="Login" width="150" class="login-img"/>
      </div>
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
