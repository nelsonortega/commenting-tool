import './CommentingToolPage.css';
import React, { useContext } from 'react';
import TextArea from '../components/TextArea/TextArea';
import CommentContext from '../context/CommentContext';
import Container from '../components/Container/Container';

function CommentingToolPage() {
  const { comments } = useContext(CommentContext)

  console.log(comments)
  
  return (
    <Container>
      <div className="page-title">
        Commentig Tool
      </div>
      <TextArea />
    </Container>
  );
}

export default CommentingToolPage;