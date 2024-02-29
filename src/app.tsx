import React, { useState } from 'react';
import './app.css';
import WriteComment from './components/WriteComment';
import Comment from './components/Comment';

function App() {
  const [comments, setComments] = useState([]);

  const handleSubmit = (comment) => {
    if (!comment.name || !comment.content) {
      return;
    }
    setComments([...comments, { ...comment, replies: [] }]);
  };

  const handleReply = (replyText, parentIndex) => {
    if (
      parentIndex !== undefined &&
      parentIndex >= 0 &&
      parentIndex < comments.length
    ) {
      const updatedComments = [...comments];
      updatedComments[parentIndex].replies.push({
        author: '',
        text: replyText,
        replies: [],
      });
      setComments(updatedComments);
    }
  };

  const handleUpvote = (commentIndex) => {
    const updatedComments = [...comments];
    updatedComments[commentIndex].upvotes =
      (updatedComments[commentIndex].upvotes || 0) + 1;
    setComments(updatedComments);
  };

  const handleDownvote = (commentIndex) => {
    const updatedComments = [...comments];
    updatedComments[commentIndex].downvotes =
      (updatedComments[commentIndex].downvotes || 0) + 1;
    setComments(updatedComments);
  };

  return (
    <div className="w-96">
      <h1 className="text-xl py-4">Welcome to Quinn&apos;s Comment App!</h1>
      <WriteComment onCommentSubmit={handleSubmit} />
      {comments.map((comment, index) => (
        <Comment
          key={index}
          name={comment.name}
          content={comment.content}
          replies={comment.replies || []}
          onReply={(replyText) => handleReply(replyText, index)}
          onUpvote={() => handleUpvote(index)}
          onDownvote={() => handleDownvote(index)}
        />
      ))}
    </div>
  );
}

export default App;
