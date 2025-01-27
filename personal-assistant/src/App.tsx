import { useState } from "react";
import "./App.css";
import UserInput from "./Components/UserInput";
import AiMessage from "./Components/AiMessage";
import UserMessage from "./Components/UserMessage";

type Message = {
    role: string;
    content: string;
};

export type Messages = Message[];

export default function App() {
    const [userQuestion, setUserQuestion] = useState<string>("");
    const [messages, setMessages] = useState<Messages>([
        { role: "user", content: "wow" },
        { role: "assistant", content: "another wow" },
    ]);

    return (
        <>
            {messages.map((message, i) =>
                i % 2 === 0 ? <UserMessage index={i} messages={messages} /> : <AiMessage index={i} messages={messages} />
            )}

            <UserInput setUserQuestion={setUserQuestion} setMessages={setMessages} />
        </>
    );
}
