import React from 'react';
import CommentingToolPage from './pages/CommentingToolPage';
import CommentProvider from './context/Comment/CommentProvider';
import CurrentUserProvider from './context/CurrentUser/CurrentUserProvides';

function App() {
  return (
    <CommentProvider>
      <CurrentUserProvider>
        <CommentingToolPage />
      </CurrentUserProvider>
    </CommentProvider>
  );
}

export default App;