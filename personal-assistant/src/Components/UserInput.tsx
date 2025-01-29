import React from "react";
import { Messages } from "../App";
import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { RunnablePassthrough, RunnableSequence } from "@langchain/core/runnables";
import { retriever } from "../utils/retriever";
import { combineDocuments } from "../utils/combineDocuments";

interface UserInputProps {
    setUserQuestion: React.Dispatch<React.SetStateAction<string>>;
    setMessages: React.Dispatch<React.SetStateAction<Messages>>;
    userQuestion: string;
}
const openAIApiKey = process.env.OPENAI_API_KEY;
const llm = new ChatOpenAI({ openAIApiKey });

const UserInput = async ({ setUserQuestion, setMessages, userQuestion }: UserInputProps) => {
    const standaloneQuestionTemplate = "Given a question, convert it to a standalone question. question: {question} standalone question:";
    const standaloneQuestionPrompt = PromptTemplate.fromTemplate(standaloneQuestionTemplate);

    const answerTemplate = `You are a helpful and enthusiastic support bot who can answer a given question about the user based on the context provided from supabase. Try to find the answer in the context. If you really don't know the answer, say "I'm sorry, I don't know the answer to that." And direct the questioner to email blablabla@gmail.com. Don't try to make up an answer. Always speak as if you were chatting to a friend.
    context: {context}
    question: {question}
    answer: `;
    const answerPrompt = PromptTemplate.fromTemplate(answerTemplate);

    const standaloneQuestionChain = standaloneQuestionPrompt.pipe(llm).pipe(new StringOutputParser());

    const retrieverChain = RunnableSequence.from([(prevResult) => prevResult.standalone_question, retriever, combineDocuments]);

    const answerChain = answerPrompt.pipe(llm).pipe(new StringOutputParser());

    const chain = RunnableSequence.from([
        {
            standalone_question: standaloneQuestionChain,
            original_input: new RunnablePassthrough(),
        },
        {
            context: retrieverChain,
            question: ({ original_input }) => original_input.question,
        },
        answerChain,
    ]);

    const response = await chain.invoke({
        question: "What are the technical requirements for running Scrimba? I only have a very old laptop which is not that powerful.",
    });

    console.log(response);

    const handleAsk = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setUserQuestion("");
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
