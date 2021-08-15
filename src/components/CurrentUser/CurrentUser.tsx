import './CurrentUser.css'
import Avatar from '../Avatar/Avatar';
import React, { useContext } from 'react';
import CurrentUserContext from '../../context/CurrentUser/CurrentUserContext';

function CurrentUser() {
  const { currentUser } = useContext(CurrentUserContext)

  return (
    <div className={'current-user-container'}>
      Commenting as: 
      <Avatar user={currentUser.user} avatarColor={currentUser.avatarColor}/>
    </div>
  )
}

export default CurrentUser