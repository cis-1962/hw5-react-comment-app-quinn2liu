import React, { useState } from 'react';

interface WriteCommentProps {
  onCommentSubmit: (comment: { name: string; content: string }) => void;
}

export default function WriteComment({ onCommentSubmit }: WriteCommentProps) {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!name || !content) {
      return;
    }
    onCommentSubmit({ name, content });
    setName('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input
        type="text"
        id="name"
        value={name}
        onChange={(evt) => setName(evt.target.value)}
        placeholder="Name..."
        className="w-full mb-2 border-2 p-2 rounded-md"
      />
      <input
        id="content"
        value={content}
        onChange={(evt) => setContent(evt.target.value)}
        placeholder="Your comment here..."
        className="w-full mb-2 border-2 p-2 rounded-md"
      />
      <button
        type="submit"
        className="bg-gray-500  text-white py-2 px-4 rounded"
        disabled={!name || !content}
      >
        Submit Comment
      </button>
    </form>
  );
}
