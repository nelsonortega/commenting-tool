import { ReactChild, useState } from "react"
import { ICurrentUser } from "../CurrentUser/CurrentUserContext"
import CommentContext, { IComment, ICommentContext, IReply } from "./CommentContext"

interface ICommentProviderProps {
  children: ReactChild
}

const CommentProvider = (props: ICommentProviderProps) => {
  const [comments, setComments] = useState<Array<IComment>>([])
  const [replies, setReplies] = useState<Array<IReply>>([])

  const addNewComment = (currentUser: ICurrentUser, content: string) => {
    const commentID = Date.now()

    const newComment: IComment = {
      id: `ID:${commentID}`,
      content: content,
      user: currentUser.user,
      avatarColor: currentUser.avatarColor
    }

    setComments(comments => {
      return [...comments, newComment]
    })
  }

  const addNewReply = (currentUser: ICurrentUser, content: string, parentId: string) => {
    const replyID = Date.now()

    const newReply: IReply = {
      id: `ID:${replyID}`,
      content: content,
      user: currentUser.user,
      avatarColor: currentUser.avatarColor,
      parentId: parentId
    }

    setReplies(replies => {
      return [...replies, newReply]
    })
  }

  const commentsValue: ICommentContext = {
    comments: comments,
    replies: replies,
    addComment: addNewComment,
    addReply: addNewReply
  }

  return (
    <CommentContext.Provider value={commentsValue}>
      {props.children}
    </CommentContext.Provider>
  )
}

export default CommentProvider