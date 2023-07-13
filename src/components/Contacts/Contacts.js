import React from 'react';
import { Link } from 'react-router-dom';

import './Contacts.css';
import Hello from '../../images/hello.jpg';

function PageNotFound () {
  return (
    <div className="contacts">
      <h3 className="contacts__title">
      Контакты
      </h3>
      <img className="contacts__image" src={Hello} alt="руки друзей тянутся друг к другу"/>
      <p className="contacts__text">
       Свяжитесь с нами - мы всё расскажем
      </p>
      <Link className="button button_type_to-main" to="/friends">Вернуться к друзьям</Link>
    </div>
  )
}

export default PageNotFound;