import React from "react";
import { message } from "../App";

interface UserInput {
  setUserQuestion: React.Dispatch<React.SetStateAction<string>>;
  setMessages: React.Dispatch<React.SetStateAction<message>>;
}

const UserInput = ({ setUserQuestion, setMessages }) => {
  const handleAsk = (e) => {
    setUserQuestion(e.target.value);
    setMessages((prev: message[]) =>
      prev.push({
        role: "user",
        content: e.target.value,
      })
    );
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
