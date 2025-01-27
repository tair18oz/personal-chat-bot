import React from "react";
import { Messages } from "../App";

interface UserInput {
    setUserQuestion: React.Dispatch<React.SetStateAction<string>>;
    setMessages: React.Dispatch<React.SetStateAction<Messages>>;
}

const UserInput = ({ setUserQuestion, setMessages }) => {
    const handleAsk = (e) => {
        setUserQuestion(e.target.value);
        setMessages((prev: Messages[]) => [
            ...prev,
            {
                role: "user",
                content: e.target.value,
            },
        ]);
    };

    return (
        <>
            <label htmlFor="UserMessage">enter your question</label>
            <br />
            <input type="text" id="UserMessage" name="UserMessage" />
            <br />
            <button onClick={(e) => handleAsk(e)}>ask</button>
        </>
    );
};
export default UserInput;
