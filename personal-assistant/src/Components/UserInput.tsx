const UserInput = ({ setUserQuestion, setMessages }) => {
    const handleAsk = (e) => {
        setUserQuestion((prev) => prev.push(e.target.value));
        setMessages((prev) =>
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
            <br />
            <input type="text" id="UserMessage" name="UserMessage" />
            <br />
            <button onClick={(e) => handleAsk(e)}>ask</button>
        </>
    );
};
export default UserInput;
