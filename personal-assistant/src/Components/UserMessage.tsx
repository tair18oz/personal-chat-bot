import { Messages } from "../App";

interface userMessageProps {
  index: number;
    messages: Messages
}

const UserMessage = ({ index, messages }:userMessageProps) => {
  return (
    <>
      <h1>User: {messages[index].content}</h1>
      </>
  );
};
export default UserMessage;
