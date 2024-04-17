"use client";

import { Button } from "@/components/ui/button";
import { IconArrowElbow } from "@/components/ui/icons";
import { useEnterSubmit } from "@/hooks/use-enter-submit";
import { cn } from "@/lib/utils";
import { useChat } from "ai/react";
import { Bot, User } from "lucide-react";
import { useEffect, useRef } from "react";

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { formRef, onKeyDown } = useEnterSubmit();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "/") {
        if (
          event.target &&
          ["INPUT", "TEXTAREA"].includes((event.target as any).nodeName)
        ) {
          return;
        }
        event.preventDefault();
        event.stopPropagation();
        if (inputRef?.current) {
          inputRef.current.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [inputRef]);

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
        <div className="pb-[200px] pt-4 md:pt-10">
          {messages.map((message, i) => {
            const isUser = message.role === "user";
            const isAI = message.role === "assistant";
            return (
              <div
                key={i}
                className={cn(
                  "flex flex-row items-center gap-x-2 mt-2",
                  isUser? "justify-end" : "justify-start"
                )}
              >
                {isUser && (
                  <div className="flex items-center justify-between space-x-2">
                    
                    <span className="text-white text-sm bg-sky-500/20 p-2 rounded-md">
                    <User className="w-8 h-8 mr-2" />
                      {message.content}
                    </span>
                  </div>
                )}
                {isAI && (
                  <div className="chat flex items-center justify-between space-x-2">
                    <div className="text-white text-sm bg-violet-500/20 p-2 rounded-md">
                    <div className="flex items-center font-semibold underline">
                    <Bot className="w-8 h-8 mr-2" />
                    PalamarDev:
                    </div>
                    <span className="text-sm text-white break-all whitespace-pre-wrap p-2">
                      {message.content}
                    </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div
          className="fixed inset-x-0 bottom-0 w-full from-muted/30 from-0% 
        to-muted/30 to-50% duration-300 ease-in-out animate-in peer-[[data-state=open]]:group-[]:lg:pl-[250px] 
        peer-[[data-state=open]]:group-[]:xl:pl-[300px] flex items-center justify-center max-w-6xl mx-auto mb-2 p-2"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex items-center p-2 w-full mt-4 rounded-lg space-x-2 bg-zinc-800"
          >
            <textarea
              ref={inputRef}
              tabIndex={0}
              onKeyDown={onKeyDown}
              placeholder="Pergunte-me algo? 🤖"
              value={input}
              onChange={handleInputChange}
              className="min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
              autoFocus
              rows={1}
              spellCheck={false}
              autoComplete="off"
              autoCorrect="off"
              name="message"
              aria-label="Escreva sua pergunta"
            />
            <Button
              type="submit"
              size="icon"
              disabled={input === ""}
              className="flex items-center justify-center w-12 h-12 bg-violet-500 
              rounded-lg hover:bg-violet-600"
            >
              <IconArrowElbow className="w-5 h-5" />
              <span className="sr-only">
                Enviar mensagem
              </span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
