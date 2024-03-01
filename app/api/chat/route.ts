import { NextRequest, NextResponse } from "next/server";
import { Message as VercelChatMessage, StreamingTextResponse } from "ai";

import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import { HttpResponseOutputParser } from "langchain/output_parsers";
import { RunnableSequence } from "@langchain/core/runnables";

export const runtime = "edge";

const formatMessage = (message: VercelChatMessage) => {
  return `${message.role === "user"? "User:" : "AI: "} ${message.content}`;
};

const TEMPLATE = `You are PalamarDev a senior software developer and all responses must be answered using natural and detailed language.

Current conversation:
{chat_history}

User: {input}
AI:`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages = body.messages ?? [];
    const formattedPreviousMessages = messages.slice(0, -1).map(formatMessage);
    const currentMessageContent = messages[messages.length - 1].content;
    const prompt = PromptTemplate.fromTemplate(TEMPLATE);

    const model = new ChatOpenAI({
      temperature: 0.7,
      modelName: "gpt-4-0125-preview",
      maxTokens: 1000,
      topP: 1,
      frequencyPenalty: 1,
      presencePenalty: 1,
      streaming: true,
    });

    const outputParser = new HttpResponseOutputParser();

    const chain = RunnableSequence.from([prompt, model, outputParser]);

    const stream = await chain.stream({
      chat_history: formattedPreviousMessages.join("\n"),
      input: currentMessageContent,
    });

    return new StreamingTextResponse(stream);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: e.status ?? 500 });
  }
}
