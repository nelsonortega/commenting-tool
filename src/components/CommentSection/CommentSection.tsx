import './CommentSection.css'
import Comment from '../Comment/Comment';
import React, { useContext } from 'react';
import CommentContext from '../../context/CommentContext';

function CommentSection() {
  const { comments } = useContext(CommentContext)

  return (
    <div className="comment-section-container">
      {comments.map(comment => {
        return (
          <Comment 
            id={comment.id}
            key={comment.id}
            user={comment.user} 
            content={comment.content} 
          />
        )
      })}
    </div>
  )
}

export default CommentSection