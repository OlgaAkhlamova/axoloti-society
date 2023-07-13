import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

function Logo() {
  return (
    <>
      <Link className='header__logo' to='/'>Axoloti Friendship Society</Link>
    </>
  )
}
export default Logo