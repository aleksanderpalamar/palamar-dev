"use client";

import { cn } from "@/lib/utils";
import { useChat } from "ai/react";
import { Bot, SendHorizonal, User } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  useEffect(() => {
    const disableRightClick = (event: {
      button: number;
      preventDefault: () => void;
    }) => {
      if (event.button === 2) {
        event.preventDefault();
        toast.error(
          "Por motivo de segurança, você não pode usar o botão direito do mouse, nesta página."
        );
      }
    };

    document.addEventListener("contextmenu", disableRightClick);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen p-4">
      <div className="max-w-6xl self-center w-full flex-1">
        <h1 className="text-3xl font-bold text-white flex items-center">
          <Bot className="w-8 h-8 mr-2" />
          Chat AI
        </h1>
        <span className="text-xs text-muted-foreground">
          Esse modelo AI GPT - Generative Pre-trained Transformer está sendo
          treinado para responder perguntas sobre programação e tecnologia.
        </span>
        <form
          onSubmit={handleSubmit}
          className="flex items-center p-2 w-full mt-4 rounded-lg space-x-2 bg-zinc-800"
        >
          <input
            placeholder="Type a message"
            value={input}
            onChange={handleInputChange}
            className="flex-1 px-3 py-4 border-none rounded-lg focus:outline-none
          justify-self-end bg-zinc-800 text-white resize-none h-auto w-full row-span-4"
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
                message.role === "user" && "bg-sky-500/20",
                message.role === "assistant" && "bg-violet-500/20"
              )}
            >
              {message.role === "user" && (
                <div className="flex items-center justify-between space-x-2">
                  <span className="text-white flex items-center">
                    <User className="w-6 h-6" />
                  </span>
                  <span className="text-white text-sm">{message.content}</span>
                </div>
              )}
              {message.role === "assistant" && (
                <div className="flex items-center justify-between space-x-2">
                  <span className="text-white flex items-center">
                    <Bot className="w-6 h-6" />
                  </span>
                  <span className="text-white text-sm">{message.content}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
