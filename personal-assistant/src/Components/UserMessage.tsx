import { Messages } from "../App";

interface userMessageProps {
    index: number;
    messages: Messages;
}

const UserMessage = ({ index, messages }: userMessageProps) => {
    return (
        <>
            <p>{messages[index].content}</p>
        </>
    );
};
export default UserMessage;
