import React from 'react';
import './CommentingToolPage.css';
import TextArea from '../components/TextArea/TextArea';
import Container from '../components/Container/Container';
import CommentSection from '../components/CommentSection/CommentSection';
import CurrentUser from '../components/CurrentUser/CurrentUser';

function CommentingToolPage() {  
  return (
    <Container>
      <div className="page-title">
        Commentig Tool
      </div>
      <CurrentUser />
      <TextArea />
      <CommentSection />
    </Container>
  );
}

export default CommentingToolPage;