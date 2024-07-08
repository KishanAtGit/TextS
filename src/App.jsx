import axios from "axios";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import "./App.css";

export default function App() {
  const sendText = async text => {
    await axios.post("https://texts-api-zmd6.onrender.com/", text);
  };

  return (
    <div>
      <Navbar />
      <Text sendText={sendText} />
    </div>
  );
}
