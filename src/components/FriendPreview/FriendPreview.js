import React from 'react';
// import {useParams} from "react-router-dom"; // импортируем хук
import {Link} from "react-router-dom";

function FriendPreview(props) {
  // let {id} = useParams();
  return (
    <li className='friend-preview' key={props.key}>
      <Link to={`${props.id}`}>
        <img 
          src={props.userPhoto}
          alt="друг аксолотлей"
          className='friend-preview__image'/>
        <span className='friend-preview__name'>{props.name}</span>
      </Link>
    </li>
  )
}

export default FriendPreview