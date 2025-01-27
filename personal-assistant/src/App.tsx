import { useState } from "react";
import "./App.css";
import UserInput from "./Components/UserInput";
import AiMessage from "./Components/AiMessage";
import UserMessage from "./Components/UserMessage";

export type message = {
    role: string;
    content: string;
}[];

export default function App() {
    const [userQuestion, setUserQuestion] = useState<string>("");
    const [messages, setMessages] = useState<message>([
        { role: "user", content: "wow" },
        { role: "assistant", content: "another wow" },
    ]);

  return (
    <>
      {messages.map((message, i) =>
        i % 2 === 0 ? (
          <UserMessage setMessages={setMessages} />
        ) : (
          <AiMessage setMessages={setMessages} />
        )
      )}

            <UserInput setUserQuestion={setUserQuestion} setMessages={setMessages} />
        </>
    );
}
