import './Avatar.css'
import React from 'react';

interface IAvatarProps {
  user: string
  avatarColor: string
}

function Avatar(props: IAvatarProps) {
  // We extract the first letter of the user to use it as its avatar
  const avatarLetter = props.user.charAt(0).toUpperCase()

  return (
    <div className={'comment-username'}>
      <div 
        className={'user-avatar'} 
        style={{backgroundColor: `${props.avatarColor}`}}
      >
        {avatarLetter}
      </div>
      {props.user}
    </div>
  )
}

export default Avatar