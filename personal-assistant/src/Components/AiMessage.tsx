import { Messages } from "../App";

interface AiMessageProps {
    index: number;
    messages: Messages;
}

const AiMessage = ({ index, messages }: AiMessageProps) => {
    return (
        <>
            <p>{messages[index].content}</p>
        </>
    );
};
export default AiMessage;
