import UserInput from "./Components/UserInput";
import AiMessage from "./Components/AiMessage";
import UserMessage from "./Components/UserMessage";
import { useState } from "react";
// import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
// import { createClient } from "@supabase/supabase-js";
// import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
// import { OpenAIEmbeddings } from "@langchain/openai";
import "./App.css";
import * as dotenv from "dotenv";

dotenv.config();

type message = {
  role: string;
  content: string;
};
export type Messages = message[];

// try {
//     const result = await fetch("../public/info.txt");
//     console.log("result: ", result);
//     const text = await result.text();
//     console.log("text: ", text);

//     const splitter = new RecursiveCharacterTextSplitter({
//         chunkSize: 350,
//         separators: ["\n\n", "\n", " ", ""],
//         chunkOverlap: 100,
//     });

//     const output = await splitter.createDocuments([text]);
//     console.log("output:", output);
//     const embeddings = new OpenAIEmbeddings({
//         apiKey: import.meta.env.VITE_OPENAI_API_KEY,
//         model: "text-embedding-3-small",
//     });

//     const supabaseClient = createClient(import.meta.env.VITE_SUPABASE_URL_TAIR, import.meta.env.VITE_SUPABASE_API_KEY_TAIR);
//     console.log("Supabase URL:", import.meta.env.VITE_SUPABASE_URL_TAIR);
//     console.log("Supabase Private Key:", import.meta.env.VITE_SUPABASE_API_KEY_TAIR);

//     const vectorStore = new SupabaseVectorStore(embeddings, {
//         client: supabaseClient,
//         tableName: "detailes",
//         queryName: "match_detailes",
//     });

//     await vectorStore.addDocuments(output);
// } catch (err) {
//     console.log(err);
// }

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
