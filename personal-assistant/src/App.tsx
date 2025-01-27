import { useState } from "react";
import "./App.css";
import UserInput from "./Components/UserInput";
import AiMessage from "./Components/AiMessage";
import UserMessage from "./Components/UserMessage";

export default function App() {
    type message = {
        role: string;
        content: string;
    }[];

    const [userQuestion, setUserQuestion] = useState<string>("");
    const [messages, setMessages] = useState<message>([
        { role: "user", content: "wow" },
        { role: "assistant", content: "another wow" },
    ]);

    return (
        <>
            {messages.map((messsage, i) => (i % 2 === 0 ? <UserMessage setMessages={setMessages} /> : <AiMessage setMessages={setMessages} />))}

            <UserInput setUserQuestion={setUserQuestion} setMessages={setMessages} />
        </>
    );
}
