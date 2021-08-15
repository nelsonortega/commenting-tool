import './Comment.css';
import Avatar from '../Avatar/Avatar';
import TextArea from '../TextArea/TextArea';
import React, { useContext, useState } from 'react';
import CommentContext from '../../context/Comment/CommentContext';
import ShowComponent from '../ShowComponent/ShowComponent';

interface ICommentProps {
  id: string
  user: string
  content: string
  avatarColor: string
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
      <Avatar user={props.user} avatarColor={props.avatarColor}/>
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
                avatarColor={props.avatarColor}
              />
            )
          })}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Comment