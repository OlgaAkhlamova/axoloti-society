import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

function Menu() {
  return (
    <nav className='menu'>
      <ul className='menu__list'>
        <li className='menu__list-item'>
          <NavLink className={({isActive}) => `menu__link ${isActive ? "menu__link_active" : ""}`} to='/friends'>Друзья</NavLink>
        </li>
        <li className='menu__list-item'>
          <NavLink className={({isActive}) => `menu__link ${isActive ? "menu__link_active" : ""}`} to='/news'>Новости</NavLink>
        </li>
        <li className='menu__list-item'>
          <NavLink className={({isActive}) => `menu__link ${isActive ? "menu__link_active" : ""}`} to='/contacts'>Контакты</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Menu