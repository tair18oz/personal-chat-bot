import { Messages } from "../App";

interface AiMessageProps {
  index: number;
  messages: Messages;
}

const AiMessage = ({ index, messages }: AiMessageProps) => {
  return (
    <>
      <h1>AI: {messages[index].content}</h1>
    </>
  );
};
export default AiMessage;