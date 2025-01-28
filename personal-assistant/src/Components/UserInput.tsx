import React from "react";
import { Messages } from "../App";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
interface UserInputProps {
    setUserQuestion: React.Dispatch<React.SetStateAction<string>>;
    setMessages: React.Dispatch<React.SetStateAction<Messages>>;
    userQuestion: string;
}

try {
    const result = await fetch("/info.txt");
    console.log("result: ", result);
    const text = await result.text();
    console.log("text: ", text);

    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 350,
        separators: ["\n\n", "\n", " ", ""],
        chunkOverlap: 100,
    });

    const output = await splitter.createDocuments([text]);
    console.log("output:", output);
} catch (err) {
    console.log(err);
}

const UserInput = ({ setUserQuestion, setMessages, userQuestion }: UserInputProps) => {
    const handleAsk = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setUserQuestion(" ");
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
                <input type="text" id="UserMessage" name="UserMessage" value={userQuestion} onChange={(e) => setUserQuestion(e.target.value)} />
                <br />
                <br />
                <button onClick={(e) => handleAsk(e)}>ask</button>
                <br />
            </form>
        </>
    );
};
export default UserInput;
