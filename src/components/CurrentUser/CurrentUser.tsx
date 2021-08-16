import './CurrentUser.css'
import Alert from '../Alert/Alert';
import Avatar from '../Avatar/Avatar';
import ShowComponent from '../ShowComponent/ShowComponent';
import React, { ChangeEvent, useContext, useState } from 'react';
import CurrentUserContext from '../../context/CurrentUser/CurrentUserContext';

function CurrentUser() {
  const { currentUser, updateUser } = useContext(CurrentUserContext)

  const [showAlert, setShowAlert] = useState<boolean>(false)
  const [newUser, setNewUser] = useState<string>(currentUser.user)
  const [isUserEditing, setIsUserEditing] = useState<boolean>(false)
  const [avatarColor, setAvatarColor] = useState<string>(currentUser.avatarColor)

  const availableColors = ['lightblue', 'lightcoral', 'lightgreen', 'lightsteelblue']

  const setNewUserValue = (event: ChangeEvent<HTMLInputElement>) => {
    setNewUser(event.target.value)
  }

  const setAvatarColorValue = (event: ChangeEvent<HTMLSelectElement>) => {
    setAvatarColor(event.target.value)
  }

  const saveNewUser = () => {
    if (!newUser.trim()) {
      setShowAlert(true)
      setNewUser('')
      return 
    }

    updateUser(newUser, avatarColor)
    setShowAlert(false)
    switchToEditUser()
  }

  const switchToEditUser = () => {
    setIsUserEditing(prevState => !prevState)
  }

  return (
    <div className={'current-user-container'}>
      <ShowComponent show={!isUserEditing}>
        Commenting as: 
        <Avatar user={currentUser.user} avatarColor={currentUser.avatarColor}/>
        <button className={'change-user-button'} onClick={switchToEditUser}>Change User</button>
      </ShowComponent>
      <ShowComponent show={isUserEditing}>
        <div className={'edit-user-container'}>
          Editing: 
          <div className={'select-input-container'}>
            <select 
              value={avatarColor} 
              className={'select-avatar-color'} 
              style={{backgroundColor: `${avatarColor}`}} 
              onChange={setAvatarColorValue}
            >
              {availableColors.map(color =>
                <option 
                  key={color} 
                  value={color}
                  style={{backgroundColor: `${color}`}} 
                />
              )}
            </select>
            <input 
              type="text" 
              maxLength={20}
              value={newUser} 
              className={'user-input'}
              onChange={setNewUserValue}
            />
            <button className={'change-user-button'} onClick={saveNewUser}>Save User</button>
          </div>
          <Alert 
            showAlert={showAlert}
            setShowAlert={setShowAlert}
            message={"User can't be empty!"}
          />
        </div>
      </ShowComponent>
    </div>
  )
}

export default CurrentUser