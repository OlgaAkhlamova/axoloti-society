import React from 'react';
import './FriendCard.css';

function FriendCard({friend}) {
  return (
    <div className='friend__card' key={friend.id}>
      <img 
        className='friend__userpic'
        src={friend.userPhoto}
        alt={friend.name} />
      <div className='friend__details'>
        <h3 className='friend__name'>{friend.name}</h3>
        <p className='friend__location'>
          Местоположение: {friend.location}
        </p>
        <p className='friends__quantity'>
          Количество аксолотлей: {friend.axolotiOwned.length}
        </p>
        <p className='friend__fav-quote'>
          Любимое высказывание о дружбе: {friend.favQuote}
        </p>
      </div>
    </div> 
  ) 
}

export default FriendCard