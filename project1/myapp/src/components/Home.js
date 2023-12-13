// Reorder imports to the top
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Home.css';

import w1 from '../assets/images/st.jpg'

function Home() {
  return (
    <div>
      <nav className="Sid">
        <div className='left'>STUDENT PORTAL</div>
        <div className='right'>Events</div>
        <div className='right1'>About</div>
        <div className='right1'>Contact</div>
        <Link to='/login'>
          <div className='right2'>Login</div>
        </Link>
      </nav>

      <img src={w1} alt='logo'></img>
    </div>
  );
}

export default Home;
