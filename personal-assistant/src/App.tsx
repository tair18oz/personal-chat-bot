import { useState } from "react";
import "./App.css";
import UserInput from "./Components/UserInput";
import AiMessage from "./Components/AiMessage";
import UserMessage from "./Components/UserMessage";

type message = {
    role: string;
    content: string;
};
export type Messages = message[];

export default function App() {
    const [userQuestion, setUserQuestion] = useState<string>("");
    const [messages, setMessages] = useState<Messages>([
        { role: "user", content: "wow" },
        { role: "assistant", content: "another wow" },
    ]);

    return (
        <div className="chat-container">
            <div className="messages-container">
                {messages.map((message, i) =>
                    message.role === "user" ? (
                        <UserMessage key={i} index={i} messages={messages} />
                    ) : (
                        <AiMessage key={i} index={i} messages={messages} />
                    )
                )}
            </div>
            <div className="input-section">
                <UserInput setUserQuestion={setUserQuestion} setMessages={setMessages} userQuestion={userQuestion} />
            </div>
        </div>
    );
}
