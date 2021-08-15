import { ReactChild, useState } from "react"
import CommentContext, { IComment, ICommentContext, IReply } from "./CommentContext"

interface ICommentProviderProps {
  children: ReactChild
}

const CommentProvider = (props: ICommentProviderProps) => {
  const [comments, setComments] = useState<Array<IComment>>([])
  const [replies, setReplies] = useState<Array<IReply>>([])

  const addNewComment = (user: string, content: string) => {
    const newComment: IComment = {
      id: 'id',
      content: content,
      user: user
    }

    setComments(comments => {
      return [...comments, newComment]
    })
  }

  const addNewReply = (user: string, content: string, parentId: string) => {
    const newReply: IReply = {
      id: 'id',
      content: content,
      user: user,
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