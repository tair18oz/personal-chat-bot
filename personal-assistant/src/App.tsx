import { useState } from "react";
import "./App.css";
import UserInput from "./Components/UserInput";
import AiMessage from "./Components/AiMessage";
import UserMessage from "./Components/UserMessage";

function App() {
    const [userQuestion, serUserQuestion] = useState<string>("");
    const [messages, serMessages] = useState([]);

    return (
        <>
            <AiMessage serMessages={serMessages} />
            <UserMessage serMessages={serMessages} />
            <UserInput serUserQuestion={serUserQuestion} />
        </>
    );
}

export default App;
