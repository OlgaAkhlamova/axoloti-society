import React from 'react';
import { Link } from 'react-router-dom';

import './PageNotFound.css';
import Bye from '../../images/404.jpg';

function PageNotFound () {
  return (
    <div className="not-found">
      <h3 className="not-found__title">
       <span>404</span> Кажется, такой страницы пока нет...
      </h3>
      <img className="not-found__image" src={Bye} alt=""/>
      <p className="not-found__text">
       Лучше 404 с кнопкой «Вернуться к друзьям», чем концы в воду.
      </p>
      <Link className="button button_type_to-main" to="/friends">Вернуться к друзьям</Link>
    </div>
  )
}

export default PageNotFound;