import './CommentSection.css'
import Comment from '../Comment/Comment';
import React, { useContext } from 'react';
import CommentContext from '../../context/Comment/CommentContext';

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
            avatarColor={comment.avatarColor}
          />
        )
      })}
    </div>
  )
}

export default CommentSection