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
  const [showReplies, setShowReplies] = useState<boolean>(true)
  const [showReplyTextArea, setShowReplyTextArea] = useState<boolean>(false)

  const { replies } = useContext(CommentContext)

  /*
   * Filtering all the replies from the context
   * to get the specific ones for each comment
   */
  const commentReplies = replies.filter(reply =>
    reply.parentId === props.id
  )

  const showOrHideReplyTextArea = () =>
    setShowReplyTextArea(prevState => !prevState)

  const showOrHideReplies = () => 
    setShowReplies(prevState => !prevState)

  return (
    <React.Fragment>
      <Avatar user={props.user} avatarColor={props.avatarColor}/>
      <div className={'main-content-container'}>
        <div className={'separator-line-container'} onClick={showOrHideReplies}>
          <div className={'separator-line'}></div>
        </div>
        <ShowComponent show={showReplies}>
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
                  avatarColor={comment.avatarColor}
                />
              )
            })}
          </div>
        </ShowComponent>
      </div>
    </React.Fragment>
  )
}

export default Comment