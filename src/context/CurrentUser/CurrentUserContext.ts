import { createContext } from "react";

export interface ICurrentUser {
  user: string
  avatarColor: string
}

export interface ICurrentUserContext {
  currentUser: ICurrentUser
  updateUser: (user: string, avatarColor: string) => void
}

const CurrentUserContext = createContext<ICurrentUserContext>({} as ICurrentUserContext)

export default CurrentUserContext