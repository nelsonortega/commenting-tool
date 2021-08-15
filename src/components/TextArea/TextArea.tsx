import './TextArea.css';
import CommentContext from '../../context/CommentContext';
import React, { ChangeEvent, useContext, useState } from 'react';

interface ITextAreaProps {
  parentId?: string
  closeReply?: () => void
}

function TextArea(props: ITextAreaProps) {
  const [comment, setComment] = useState<string>('')
  const { addComment, addReply } = useContext(CommentContext)

  const setTextAreaValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value)
  }

  const sendComment = () => {
    if (props.parentId && props.closeReply) {
      addReply('user', comment, props.parentId)
      props.closeReply()
    } else {
      addComment('user', comment)
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