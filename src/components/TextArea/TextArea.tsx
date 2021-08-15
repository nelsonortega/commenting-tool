import './TextArea.css';
import React, { ChangeEvent, useContext, useState } from 'react';
import CommentContext from '../../context/Comment/CommentContext';
import CurrentUserContext from '../../context/CurrentUser/CurrentUserContext';

interface ITextAreaProps {
  parentId?: string
  closeReply?: () => void
}

function TextArea(props: ITextAreaProps) {
  const [comment, setComment] = useState<string>('')
  const { addComment, addReply } = useContext(CommentContext)
  const { currentUser } = useContext(CurrentUserContext)

  const setTextAreaValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value)
  }

  const sendComment = () => {
    if (props.parentId && props.closeReply) {
      addReply(currentUser, comment, props.parentId)
      props.closeReply()
    } else {
      addComment(currentUser, comment)
    }

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