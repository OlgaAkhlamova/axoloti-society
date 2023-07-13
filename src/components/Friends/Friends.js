import React from 'react';
import './Friends.css';
import FriendPreview from '../FriendPreview/FriendPreview';

function Friends({friends}) {
  return (
    <div className='friends'>
      <ul className='friends__list'>
        {friends.map((friend) => (
          <FriendPreview 
          key={friend.id}
          id={friend.id}
          userPhoto={friend.userPhoto}
          name={friend.name}/>
        ))}
      </ul>

    </div>
  )
}

export default Friends

{/* <li className='friend-preview'>
          <Link to='/friend'>
            <img 
              src={fr1}
              alt="друг 1"
              className='friend-preview__image'/>
            <span className='friend-preview__name'>Саша</span>
          </Link>
        </li>
        <li className='friend-preview'>
          <Link to='/friend'>
            <img 
              src={fr2}
              alt="друг 2"
              className='friend-preview__image'/>
            <span className='friend-preview__name'>Маша</span>
          </Link>
        </li>
        <li className='friend-preview'>
          <Link to='/friend'>
            <img 
              src={fr1}
              alt="друг 1"
              className='friend-preview__image'/>
            <span className='friend-preview__name'>Саша</span>
          </Link>
        </li>  */}