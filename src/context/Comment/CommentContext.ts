import { createContext } from "react";
import { ICurrentUser } from "../CurrentUser/CurrentUserContext";

export interface IComment {
  id: string
  content: string
  user: string
  avatarColor: string
}

export interface IReply extends IComment {
  parentId: string
}

export interface ICommentContext {
  comments: Array<IComment>
  replies: Array<IReply>
  addComment: (user: ICurrentUser, content: string) => void
  addReply: (user: ICurrentUser, content: string, parentId: string) => void
}

const CommentContext = createContext<ICommentContext>({} as ICommentContext)

export default CommentContext