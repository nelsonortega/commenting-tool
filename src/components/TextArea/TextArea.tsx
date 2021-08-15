import './TextArea.css';
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import CommentContext from '../../context/Comment/CommentContext';
import CurrentUserContext from '../../context/CurrentUser/CurrentUserContext';
import ShowComponent from '../ShowComponent/ShowComponent';

interface ITextAreaProps {
  parentId?: string
  closeReply?: () => void
}

function TextArea(props: ITextAreaProps) {
  const { currentUser } = useContext(CurrentUserContext)
  const { addComment, addReply } = useContext(CommentContext)

  const [comment, setComment] = useState<string>('')
  const [showAlert, setShowAlert] = useState<boolean>(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (showAlert) {
      timeout = setTimeout(() => {
        setShowAlert(false)
      }, 3000)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [showAlert])

  const setTextAreaValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value)
  }

  const sendComment = () => {
    if (!comment.trim()) {
      setShowAlert(true)
      setComment('')
      return 
    }

    if (props.parentId && props.closeReply) {
      addReply(currentUser, comment, props.parentId)
      props.closeReply()
    } else 
      addComment(currentUser, comment)

    setShowAlert(false)
    setComment('')
  }

  return (
    <div className="textarea-container">
      <textarea 
        value={comment}
        onChange={setTextAreaValue}
        className="comment-textarea"
        placeholder="Write a comment!"
      />
      <div className="button-container">
        <ShowComponent show={showAlert}> 
          <label className="alert">Comment can't be empty!</label> 
        </ShowComponent>
        <button 
          className="send-comment-button"
          onClick={sendComment}
        >
          Comment
        </button>
      </div>
    </div>
  );
}

export default TextArea;