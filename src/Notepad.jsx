import React, { useState } from 'react';

export default function Notepad() {
  const [postContent, setPostContent] = useState(''); // Declare a state variable...

  function handleChange(input) {
    // console.log(input);
    var randChar = Math.random().toString(36).slice(2, 3);
    
    if (Math.random() < .2) {
      setPostContent(input + randChar);
    } else {
      setPostContent(input);
    }
    
  }

  return (
    <textarea
      value={postContent}
      onChange={e => handleChange(e.target.value)}
    />
  );
}