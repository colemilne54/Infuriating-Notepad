import React, { useState } from 'react';

function PopupSettingsDialog(props) {
  const [promptSize, setPromptSize] = useState(5);
  const [randomChance, setRandomChance] = useState(.2);

  function handlePromptSize(event) {
    setPromptSize(event.target.value);
  }

  function handleRandomChance(event) {
    setRandomChance(event.target.value);
  }

  function handleCloseClick() {
    if (props.onClose) {
      props.onClose();
    }
  }


  return (
    <div className="popup-settings-dialog">
      <h2>Settings</h2>
      <label>
        Prompt Size:
        <input type="range" min=".01" max=".99" value={promptSize} onChange={handlePromptSize} />
      </label>
      <label>
        Random Chance:
        <input type="range" min="1" max="20" value={randomChance} onChange={handleRandomChance} />
      </label>
      <button onClick={handleCloseClick}>Close</button>
    </div>
  );
}

export default PopupSettingsDialog;