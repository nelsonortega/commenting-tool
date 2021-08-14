import './TextArea.css';
import React, { useState } from 'react';

function TextArea() {
  const [comment, setComment] = useState<string>("")

  const setTextAreaValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value)
  }

  const sendComment = () => {
    console.log('Click')
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