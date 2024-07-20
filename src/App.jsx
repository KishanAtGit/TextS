import axios from "axios";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import "./App.css";

export default function App() {
  const sendText = async (text, setText, setMessage) => {
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
      <Text sendText={sendText} />
    </div>
  );
}
