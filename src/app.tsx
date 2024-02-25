import { useState } from 'react';
import WriteCommentBlock from './components/WriteCommentBlock';
import './app.css';

function App() {

  return (
    <>
    <h1 className = 'text-2xl py-4'>Welcome to Quinn&apos;s Comment App!</h1>
      <WriteCommentBlock />
    </>
  );
}

export default App;
