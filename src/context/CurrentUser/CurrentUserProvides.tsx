import { ReactChild, useState } from "react"
import CurrentUserContext, { ICurrentUser, ICurrentUserContext } from "./CurrentUserContext"

interface ICurrentUserProviderProps {
  children: ReactChild
}

const CurrentUserProvider = (props: ICurrentUserProviderProps) => {
  const [currentUser, setCurrentUser] = useState<ICurrentUser>({
    user: 'Default User',
    avatarColor: 'lightblue'
  })

  const updateUser = (user: string, avatarColor: string) => {
    setCurrentUser({
      user: user,
      avatarColor: avatarColor
    })
  }

  const currentUserValue: ICurrentUserContext = {
    currentUser: currentUser,
    updateUser: updateUser
  }

  return (
    <CurrentUserContext.Provider value={currentUserValue}>
      {props.children}
    </CurrentUserContext.Provider>
  )
}

export default CurrentUserProvider