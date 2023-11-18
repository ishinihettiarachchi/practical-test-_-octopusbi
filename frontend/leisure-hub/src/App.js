// src/App.js
import React, { useState, useEffect } from 'react';
import Login from './pages/login/Login';
import Hobby from './pages/hobby/Hobby';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import User from './pages/user/User';
import New from './pages/new/New';
import Update from './pages/update/Update ';
import axios from 'axios';
import UserList from './pages/UserList/UserList';

const App = () => {
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    // Fetch hobbies or set them using some other method
    // For example, you might have an API call here
    // and update the state with the fetched hobbies
    // Example API call using axios:
    axios.get('http://localhost:3001/')
    .then((res) => setHobbies(res.data))
    .catch((err) => console.log(err));
  }, []); // Make sure to pass an empty dependency array to useEffect so that it runs only once

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/hobbies" element={<Hobby />} />
          <Route path="/user" element={<User />} />
          <Route path="/userlist" element={<UserList />} />

          <Route path="/new" element={<New hobbies={hobbies} />} />
          <Route path="/update/:id" element={<Update />} />
          

        </Routes>
      </Router>
    </div>
  );
};

export default App;
