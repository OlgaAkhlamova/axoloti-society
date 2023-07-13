import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

function Header() {
  return (
    <header className='header'>
      <Logo />
      <Menu />
    </header>
  )
}

export default Header