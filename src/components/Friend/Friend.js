import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Friend.css';
import FriendCard from '../FriendCard/FriendCard';

function Friend({friends}) {
  let { id } = useParams(); 
  const friend = friends.find(f => f.id === id);

  return (
    <div className='friend'>
      <FriendCard friend={friend}/>
      <button className='button button_type_back'>
        <Link to="/friends"></Link>
      </button>
    </div>
  )
}

export default Friend