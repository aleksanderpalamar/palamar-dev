"use client";

import { cn } from "@/lib/utils";
import { useChat } from "ai/react";
import { Bot, SendHorizonal, User } from "lucide-react";
import { useEffect } from "react";

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  // Scroll to bottom of chat when new messages are added.
  useEffect(() => {
    const chat = document.querySelector(".chat");
    if (chat) {
      chat.scrollTo(0, chat.scrollHeight);
    }
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen p-4">
      <div className="max-w-6xl self-center w-full flex-1">
        <h1 className="text-3xl font-bold text-white flex items-center">
          <Bot className="w-8 h-8 mr-2" />
          Chat AI
        </h1>
        <span className="text-xs text-muted-foreground">
          (powered by Palamar)
        </span>
        <form
          onSubmit={handleSubmit}
          className="flex items-center p-2 w-full mt-4 rounded-lg space-x-2 bg-zinc-800"
        >
          <input
            placeholder="Pergunte-me algo? 🤖"
            value={input}
            onChange={handleInputChange}
            className="flex-1 px-3 py-4 border-none rounded-lg focus:outline-none
          justify-self-end bg-zinc-800 text-white resize-none h-auto w-full row-span-4 placeholder:text-gray-500"
          />
          <button
            className="flex items-center justify-center w-12 h-12 bg-violet-500 
          rounded-lg hover:bg-violet-600"
          >
            <SendHorizonal className="w-5 h-5" />
          </button>
        </form>
        {messages.map((message) => {
          return (
            <div
              key={message.id}
              className={cn(
                "flex flex-col p-2 my-2 bg-[#48424e]/20 rounded-lg",
                message.role === "user" && "bg-transparent",
                message.role === "assistant" && "bg-transparent"
              )}
            >
              {message.role === "user" && (
                <div className="flex items-center justify-between space-x-2">
                  <span className="text-white text-sm bg-sky-500/20 p-2 rounded-md">
                    <User className="w-6 h-6 mr-2" />
                    {message.content}
                  </span>
                </div>
              )}
              {message.role === "assistant" && (
                <div className="flex items-center justify-between space-x-2">
                  <div className="text-white text-sm bg-violet-500/20 p-2 rounded-md">
                    <div className="flex items-center font-semibold underline">
                      <Bot className="w-6 h-6 mr-2" />
                      PalamarDev:
                    </div>
                    <pre className="text-sm text-white break-all whitespace-pre-wrap p-2">
                      {message.content}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
