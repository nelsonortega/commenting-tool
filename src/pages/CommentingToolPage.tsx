import React from 'react';
import './CommentingToolPage.css';
import TextArea from '../components/TextArea/TextArea';
import Container from '../components/Container/Container';

function CommentingToolPage() {
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