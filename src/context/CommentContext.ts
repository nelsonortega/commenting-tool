import { createContext } from "react";

export interface IComment {
  id: string
  content: string
  user: string
}

export interface IReply {
  id: string
  content: string
  user: string
  parentId: string
}

export interface ICommentContext {
  comments: Array<IComment>
  replies: Array<IReply>
  addComment: (user: string, content: string) => void
  addReply: (user: string, content: string, parentId: string) => void
}

const CommentContext = createContext<ICommentContext>({} as ICommentContext)

export default CommentContext