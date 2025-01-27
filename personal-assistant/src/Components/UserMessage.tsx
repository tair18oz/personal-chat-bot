import { Messages } from "../App";

interface userMessageProps {
    index: number;
    messages: Messages;
}

const UserMessage = ({ index, messages }: userMessageProps) => {
    return <div className="user-message"> {messages[index].content}</div>;
};
export default UserMessage;
