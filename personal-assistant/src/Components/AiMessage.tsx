import { Messages } from "../App";

interface AiMessageProps {
    index: number;
    messages: Messages;
}

const AiMessage = ({ index, messages }: AiMessageProps) => {
    return <div className="ai-message">{messages[index].content}</div>;
};
export default AiMessage;