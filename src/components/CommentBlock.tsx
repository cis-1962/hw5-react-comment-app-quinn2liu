import React, { useState, useEffect } from 'react';

interface CommentProps {
    className?: string;
}

export default function CommentBlock ( {className}: CommentProps) {
  const [userInput, setUserInput] = useState('');
  return (
    <input
      type="text"
      value={userInput}
      onChange={(evt) => setUserInput(evt.target.value)}
      placeholder='Enter comment here...'
      className={`${className} p-4 bg-white text-black`}
    />
  );
};