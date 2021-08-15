import './Comment.css';
import TextArea from '../TextArea/TextArea';
import React, { useContext, useState } from 'react';
import CommentContext from '../../context/CommentContext';
import ShowComponent from '../ShowComponent/ShowComponent';

interface ICommentProps {
  id: string
  user: string
  content: string
}

function Comment(props: ICommentProps) {
  const [showReplyTextArea, setShowReplyTextArea] = useState<boolean>(false)

  const { replies } = useContext(CommentContext)

  const commentReplies = replies.filter(reply =>
    reply.parentId === props.id
  )

  const showOrHideReplyTextArea = () => {
    setShowReplyTextArea(prevState => !prevState)
  }

  return (
    <React.Fragment>
      <div className={'comment-username'}>
        {props.user}
      </div>
      <div className={'main-content-container'}>
        <div className={'separator-line'}></div>
        <div className={'comment-reply-container'}>
          <div className={'comment-content'}>{props.content}</div>
          <button className={'comment-reply-button'} onClick={showOrHideReplyTextArea}>Reply</button>
          <ShowComponent show={showReplyTextArea}>
            <TextArea 
              parentId={props.id}
              closeReply={showOrHideReplyTextArea}
            />
          </ShowComponent>
          {commentReplies.map(comment => {
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
      </div>
    </React.Fragment>
  )
}

export default Comment