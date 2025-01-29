import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { OpenAIEmbeddings } from "@langchain/openai";
import { createClient } from "@supabase/supabase-js";

const openAIApiKey = import.meta.env.VITE_OPENAI_API_KEY;

const embeddings = new OpenAIEmbeddings({ openAIApiKey });
const sbKey = import.meta.env.VITE_SUPABASE_API_KEY_TAIR;
const sbUrl = import.meta.env.VITE_SUPABASE_URL_TAIR;
const client = createClient(sbUrl, sbKey);

const vectorStore = new SupabaseVectorStore(embeddings, {
    client,
    tableName: "detailes",
    queryName: "match_detailes",
});

const retriever = vectorStore.asRetriever();

export default retriever;
