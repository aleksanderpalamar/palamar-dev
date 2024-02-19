"use client";

import { useChat } from "ai/react";
import { Bot, SendHorizonal } from "lucide-react";

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col w-full min-h-screen p-4 bg-zinc-900">
      <div className="max-w-6xl self-center w-full flex-1">
      <h1 className="text-3xl font-bold text-white flex items-center">
        <Bot className="w-8 h-8 mr-2" />
        Chat AI        
      </h1>
      <span className="text-xs text-muted-foreground">
          Esse modelo AI GPT - Generative Pre-trained Transformer está 
          sendo treinado para responder perguntas
          sobre programação e tecnologia. 
        </span>
      <form
        onSubmit={handleSubmit}
        className="flex items-center p-2 w-full h-20 mt-4 rounded-lg space-x-2 bg-zinc-800"
      >
        <textarea
          placeholder="Type a message"
          value={input}
          onChange={handleInputChange}
          className="flex-1 p-2 border-none rounded-lg focus:outline-none
          justify-self-end bg-zinc-800 text-white resize-none"
        />
        <button
          className="flex items-center justify-center w-12 h-12 bg-violet-500 
          rounded-lg focus:outline-none focus:bg-violet-600"
        >
          <SendHorizonal className="w-5 h-5" />
        </button>
      </form>
      {messages.map((message) => {
        return (
          <div
            key={message.id}
            className="flex flex-col p-2 my-2 bg-fuchsia-blue-500/10 rounded-lg w-full self-center max-w-6xl"
          >
            <div
              className="text-violet-500 font-bold uppercase w-full 
              text-right text-sm whitespace-nowrap overflow-hidden overflow-ellipsis"
            >
              {message.role}
            </div>
            <div
              className="text-white w-full break-words whitespace-pre-wrap 
              overflow-hidden overflow-ellipsis text-sm"
            >
              {message.content}
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
}
