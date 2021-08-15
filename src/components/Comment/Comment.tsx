import './Comment.css';
import React, { useState } from 'react';
import ShowComponent from '../ShowComponent/ShowComponent';
import TextArea from '../TextArea/TextArea';

interface ICommentProps {
  user: string
  content: string
}

function Comment(props: ICommentProps) {
  const [showReplyTextArea, setShowReplyTextArea] = useState<boolean>(false)

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
            <TextArea />
          </ShowComponent>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Comment