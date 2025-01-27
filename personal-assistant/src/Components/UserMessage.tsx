import { message } from "../App";

interface userMessageProps {
    setMessages: message
}

const UserMessage = ({ setMessages }:userMessageProps) => {
  return (
    <>
      <h1>user</h1>
    </>
  );
};
export default UserMessage;
