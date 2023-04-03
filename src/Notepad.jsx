import React, { useState } from 'react';
import randomWords from 'random-words';

// ----------------- Exit Prompt Code -----------------

const initBeforeUnLoad = (showExitPrompt) => {
  window.onbeforeunload = (event) => {
    // Show prompt based on state
    if (showExitPrompt) {
      const e = event || window.event;
      e.preventDefault();
      if (e) {
        e.returnValue = ''
      }
      return '';
    }
  };
};

function MyComponent() {
  const [showExitPrompt, setShowExitPrompt] = useState(false);

  // Initialize the beforeunload event listener after the resources are loaded
  window.onload = function() {
    initBeforeUnLoad(showExitPrompt);
  };
}


// ----------------- Exit Prompt Code -----------------

function GeneratePrompt() {
  const min = 3;
  const max = 10;
  return randomWords(Math.floor(Math.random() * (max - min + 1) + min)).join(' ');
}

var randomChance = .2;

function refreshPage() {
  window.location.reload(false);
}

var prompt = GeneratePrompt();

function appendPrompt() {
  prompt += ' ';
  prompt += randomWords(3).join(' ');
}

const handlePaste = (e) => {
  e.preventDefault();
  randomChance = .5;
  appendPrompt();
  alert("nice try. now its even harder");
};

export default function Notepad() {
  const [postContent, setPostContent] = useState('');

  function handleChange(input) {
    var randChar = Math.random().toString(36).slice(2, 3);
    
    if (Math.random() < randomChance) {
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
        spellCheck={false}
        onChange={e => handleChange(e.target.value)}
        onPaste={handlePaste}
      />
      <p>{prompt == postContent && 'nice work'}</p>
      <div>{prompt == postContent && <button onClick={refreshPage}>new prompt</button>}</div>
    </>
  );
}