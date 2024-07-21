import { useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import Message from "./components/Message";
import "./App.css";

export default function App() {
  const [message, setMessage] = useState([]);

  const sendText = async (text, setText) => {
    try {
      const data = await axios.post(
        "https://texts-api-zmd6.onrender.com/",
        text
      );
      if (data.status === 201) {
        setMessage(prev => [...prev, text.text]);
        setText("");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <Message message={message} />
      <Text sendText={sendText} />
    </div>
  );
}
