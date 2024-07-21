import { useState } from "react";
import "./Text.css";

export default function Text({ sendText }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text !== "") {
      sendText({ text }, setText);
    } else return;
  };

  return (
    <div className='input-section'>
      <div className='textarea'>
        <textarea
          type='text'
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder='Type your text here.....'
        />
      </div>
      <div className='send-button'>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}
