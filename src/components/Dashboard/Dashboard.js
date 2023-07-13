import React from 'react';
// import { NavLink, Outlet } from 'react-router-dom';
import akso from '../../images/axoloti1.png'
import './Dashboard.css';

function Dashboard() {
  return (
    <div className='dashboard'>
      <img 
        src={akso} 
        alt='Общество друзей аксолотлей'
        className='dashboard-img' />
    </div>
  )
}

export default Dashboard