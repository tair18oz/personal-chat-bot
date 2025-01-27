import React from "react";
import { Messages } from "../App";

interface UserInputProps {
    setUserQuestion: React.Dispatch<React.SetStateAction<string>>;
    setMessages: React.Dispatch<React.SetStateAction<Messages>>;
    userQuestion: string;
}

const UserInput = ({ setUserQuestion, setMessages, userQuestion }: UserInputProps) => {
    const handleAsk = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setMessages((prev: Messages) => [
            ...prev,
            {
                role: "user",
                content: userQuestion,
            },
        ]);
    };

    return (
        <>
            <form>
                <br />
                <input type="text" id="UserMessage" name="UserMessage" onChange={(e) => setUserQuestion(e.target.value)} />
                <br />
                <br />
                <button onClick={(e) => handleAsk(e)}>ask</button>
                <br />
            </form>
        </>
    );
};
export default UserInput;
