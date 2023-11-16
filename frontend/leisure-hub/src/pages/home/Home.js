import React from 'react'
import './home.css'
import hobby from '../../images/hobby.png'; // Import your image
import user from '../../images/user.png'; // Import your image


function Home() {
  return (
    <div className='home'>
        <h1>Leisure<span>Hub</span></h1>
        <h2>Hello Ishini..!</h2>
    <div className='home-container'>

    <div className='container'>
    <div className='hobby'>
        <h3>Hobbies</h3>
        <img src={hobby}/>
    </div>
    </div>

    <div className='container'>
    <div className='user'>
        <h3>Add Users</h3>
        <img src={user}/>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Home 