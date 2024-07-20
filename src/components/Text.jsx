import { useState } from "react";
import Message from "./Message";
import "./Text.css";

export default function Text({ sendText }) {
  const [text, setText] = useState("");
  const [message, setMessage] = useState([]);

  const handleSend = () => {
    if (text !== "") {
      sendText({ text }, setText, setMessage);
    } else return;
  };

  return (
    <>
      <div className='message'>
        <Message message={message} />
      </div>

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
    </>
  );
}
