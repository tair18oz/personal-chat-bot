import { useState } from "react";
import "./App.css";
import UserInput from "./Components/UserInput";
import AiMessage from "./Components/AiMessage";
import UserMessage from "./Components/UserMessage";
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { OpenAIEmbeddings } from "@langchain/openai";

type message = {
  role: string;
  content: string;
};
export type Messages = message[];

import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { createClient } from "@supabase/supabase-js";

try {
  const result = await fetch("/info.txt");
  const text = await result.text();

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 350,
    separators: ["\n\n", "\n", " ", "", "##"], // default setting
    chunkOverlap: 100,
  });

  const output = await splitter.createDocuments([text]);
  console.log(output);

  const sbApiKey = process.env.VITE_SUPABASE_API_KEY_CHEN;
  const sbUrl = process.env.VITE_SUPABASE_URL_CHEN;
  const openAIApiKey = process.env.VITE_OPENAI_API_KEY;

  const client = createClient(sbUrl, sbApiKey);

  

//   await SupabaseVectorStore.fromInformation(
//     output,
//     new OpenAIEmbeddings({ openAIApiKey }),
//     {
//       client,
//       tableName: "information",
//     }
//   );
} catch (err) {
  console.log(err);
}

export default function App() {
  const [userQuestion, setUserQuestion] = useState<string>("");
  const [messages, setMessages] = useState<Messages>([
    { role: "user", content: "wow" },
    { role: "assistant", content: "another wow" },
  ]);

  return (
    <div className="chat-container">
      <div className="messages-container">
        <h2>the most wowest app in the world</h2>
        {messages.map((message, i) =>
          message.role === "user" ? (
            <UserMessage key={i} index={i} messages={messages} />
          ) : (
            <AiMessage key={i} index={i} messages={messages} />
          )
        )}
      </div>
      <div className="input-section">
        <UserInput
          setUserQuestion={setUserQuestion}
          setMessages={setMessages}
          userQuestion={userQuestion}
        />
      </div>
    </div>
  );
}
