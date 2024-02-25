import React, { useState, useEffect } from 'react';

interface NameFieldProps {
  className?: string;
}

export default function NameField ({ className }: NameFieldProps) {
  const [userInput, setUserInput] = useState('');
  return (
    <input
      type="text"
      value={userInput}
      onChange={(evt) => setUserInput(evt.target.value)}
      placeholder='Name...'
      className= {`${className} bg-white text-black p-4`}
    />
  );
};