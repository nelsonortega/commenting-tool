import './TextArea.css';
import Alert from '../Alert/Alert';
import React, { ChangeEvent, useContext, useState } from 'react';
import CommentContext from '../../context/Comment/CommentContext';
import CurrentUserContext from '../../context/CurrentUser/CurrentUserContext';

interface ITextAreaProps {
  parentId?: string
  closeReply?: () => void
}

function TextArea(props: ITextAreaProps) {
  const { currentUser } = useContext(CurrentUserContext)
  const { addComment, addReply } = useContext(CommentContext)

  const [comment, setComment] = useState<string>('')
  const [showAlert, setShowAlert] = useState<boolean>(false)

  const setTextAreaValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value)
  }

  const sendComment = () => {
    if (!comment.trim()) {
      setShowAlert(true)
      setComment('')
      return 
    }

    /*
     * If we receive a parentID as prop, it means the we are
     * replying to a comment, so we have to follow a diferent logic
     */
    if (props.parentId && props.closeReply) {
      addReply(currentUser, comment, props.parentId)
      // Here we hide the textarea from the parent component
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
        <Alert 
          showAlert={showAlert}
          setShowAlert={setShowAlert}
          message={"Comment can't be empty!"}
        />
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