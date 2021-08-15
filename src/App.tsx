import React from 'react';
import CommentProvider from './context/CommentProvider';
import CommentingToolPage from './pages/CommentingToolPage';

function App() {
  return (
    <CommentProvider>
      <CommentingToolPage />
    </CommentProvider>
  );
}

export default App;