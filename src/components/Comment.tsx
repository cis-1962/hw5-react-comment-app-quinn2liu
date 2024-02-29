import { useState } from 'react';
import WriteComment from './WriteComment';

interface CommentType {
  name: string;
  content: string;
  replies: CommentType[];
  onReply: (replyText: string, index: number) => void;
  onUpvote: () => void;
  onDownvote: () => void;
}

export default function Comment({
  name,
  content,
  replies,
  onReply,
}: CommentType) {
  const [responseText, setResponseText] = useState([]);
  const [currentCount, setCurrentCount] = useState(0);
  const [isReplying, setIsReplying] = useState(false);

  const handleReply = (response) => {
    setResponseText([...responseText, { ...response, replies: [] }]);
  };

  const openResponse = () => {
    setIsReplying(!isReplying);
  };

  const handleUpvote = () => {
    setCurrentCount((prevCount) => prevCount + 1);
  };

  const handleDownvote = () => {
    setCurrentCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="border p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <span>{name}</span>
        <div className="flex items-center space-x-2">
          <button onClick={handleUpvote}>
            <span>up</span>
          </button>
          <span>{currentCount}</span>
          <button onClick={handleDownvote}>
            <span>down</span>
          </button>
        </div>
      </div>
      <div className="mb-2">{content}</div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={openResponse}
      >
        Reply
      </button>
      {isReplying && <WriteComment onCommentSubmit={handleReply} />}
      <div className="mt-2">
        {responseText.map((reply, index) => (
          <Comment
            key={index}
            name={reply.name}
            content={reply.content}
            replies={reply.replies}
            onReply={(replyText) => onReply(replyText, index)}
            onUpvote={() => handleUpvote()}
            onDownvote={() => handleUpvote()}
          />
        ))}
      </div>
      {replies.map((reply, index) => (
        <Comment
          key={index}
          name={reply.name}
          content={reply.content}
          replies={reply.replies}
          onReply={(replyText) => onReply(replyText, index)}
          onUpvote={() => handleUpvote()}
          onDownvote={() => handleUpvote()}
        />
      ))}
    </div>
  );
}
