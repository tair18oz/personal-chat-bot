import { useState } from "react";
import "./App.css";
import UserInput from "./Components/UserInput";
import AiMessage from "./Components/AiMessage";
import UserMessage from "./Components/UserMessage";

function App() {
  const [userQuestion, setUserQuestion] = useState<string>("");
  const [messages, setMessages] = useState(['hi', 'my', 'name', 'is', 'chen']);

  return (
    <>
      {messages.map((messsage, i) => 
        i % 2 === 0 ? (
          <UserMessage setMessages={setMessages} />
        ) : (
          <AiMessage setMessages={setMessages} />
        )
      )}

      <UserInput setUserQuestion={setUserQuestion} />
    </>
  );
}

export default App;
