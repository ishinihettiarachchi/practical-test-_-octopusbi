// src/components/Login.js
import React, { useState } from 'react';
import '../login/login.css'; // Import the CSS file
import loginImage from '../../images/login-image.jpg'; // Import your image

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // This is where you would typically make an API call to authenticate the user
    // For simplicity, we'll just log the input values to the console
    console.log('Username:', username);
    console.log('Password:', password);
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
