import React, { useState } from 'react';
import randomWords from 'random-words';

function GeneratePrompt() {
  const min = 3;
  const max = 10;
  return randomWords(Math.floor(Math.random() * (max - min + 1) + min)).join(' ');
}

const prompt = GeneratePrompt();

export default function Notepad() {
  const [postContent, setPostContent] = useState('');

  function handleChange(input) {
    var randChar = Math.random().toString(36).slice(2, 3);
    
    if (Math.random() < .2) {
      setPostContent(postContent + randChar);
    } else {
      setPostContent(input);
    }
  }

  return (
    <>
    <p>type the following:</p>
    <p>{`${prompt}`}</p>
    <textarea
      value={postContent}
      onChange={e => handleChange(e.target.value)}
    />
    <p>{prompt == postContent && 'nice work'}</p>
    </>
  );
}