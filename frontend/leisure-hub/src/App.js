// src/App.js
import React from 'react';
import Login from './pages/login/Login';
import Hobby from './pages/hobby/Hobby';
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import User from './pages/user/User';

const App = () => {
  return (
    <div className="App">
      
     <Router>
          <Routes>
            <Route path="/hobbies" element={<Login/>}/>
            <Route path="/" element={<Home/>} />
            <Route path="/hobbies" element={<Hobby/>}/>
            <Route path="/user" element={<User/>}/>
          </Routes>
        </Router>
      
    </div>
  );
};

export default App;
