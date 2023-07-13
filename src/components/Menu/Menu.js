import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
  return (
    <nav className='menu'>
      <ul className='menu__list'>
        <li className='menu__list-item'>
          <Link className="menu__link" to='/friends'>Друзья</Link>
        </li>
        <li className='menu__list-item'>
          <Link className="menu__link" to='/news'>Новости</Link>
        </li>
        <li className='menu__list-item'>
          <Link className="menu__link" to='/contacts'>Контакты</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu