"use client";

import { cn } from "@/lib/utils";
import { useChat } from "ai/react";
import { Bot, SendHorizonal, User } from "lucide-react";
import { FormEvent, ReactElement, useRef, useState } from "react";
import { toast } from "sonner";

export default function ChatPage(props: {
  endpoint: string,
  emptyStateComponent: ReactElement,
  titleText?: string,
  emoji?: string;
  showIngestForm?: boolean,
  showIntermediateStepsToggle?: boolean
}) {
  const messageContainerRef = useRef<HTMLDivElement | null>(null);

  const { endpoint, titleText = "Chat AI", emoji } = props;
  const [showIntermediateSteps, setShowIntermediateSteps] = useState(false);
  const [intermediateStepsLoading, setIntermediateStepsLoading] = useState(false);

  const { messages, input, setInput, handleInputChange, handleSubmit, isLoading: chatEndpointIsLoading, setMessages } =
    useChat({
      api: endpoint,
      onResponse(response) {
        const sourcesHeader = response.headers.get("x-sources");
        const sources = sourcesHeader ? JSON.parse((Buffer.from(sourcesHeader, 'base64')).toString('utf8')) : [];
        const messageIndexHeader = response.headers.get("x-message-index");
        if (sources.length && messageIndexHeader !== null) {
          setSourcesForMessages({...sourcesForMessages, [messageIndexHeader]: sources});
        }
      },
      onError: (e) => {
        toast(e.message, {
          position: "bottom-right",
        });
      }
    });

  const [sourcesForMessages, setSourcesForMessages] = useState<Record<string, any>>({});

  async function sendMessage(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (messageContainerRef.current) {
      messageContainerRef.current.classList.add("grow");
    }
    if (!messages.length) {
      await new Promise(resolve => setTimeout(resolve, 300));
    }
    if (chatEndpointIsLoading ?? intermediateStepsLoading) {
      return;
    }
    if (!showIntermediateSteps) {
      handleSubmit(e);
    // Some extra work to show intermediate steps properly
    } else {
      setIntermediateStepsLoading(true);
      setInput("");
      const messagesWithUserReply = messages.concat({ id: messages.length.toString(), content: input, role: "user" });
      setMessages(messagesWithUserReply);
      const response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify({
          messages: messagesWithUserReply,
          show_intermediate_steps: true
        })
      });
      const json = await response.json();
      setIntermediateStepsLoading(false);
      if (response.status === 200) {
        // Represent intermediate steps as system messages for display purposes
        
        const newMessages = messagesWithUserReply;
        newMessages.push({
          id: messagesWithUserReply.length.toString(),
          content: json.output,
          role: "assistant"
        })

        setMessages([...newMessages,...json.intermediate_steps]);
        
      } else {
        if (json.error) {
          toast(json.error);
          throw new Error(json.error);
        }
      }
    }
  }

  return (
    <div className={`flex flex-col items-center p-4 md:p-8 rounded grow overflow-hidden ${(messages.length > 0 ? "border" : "")}`}>
      <div className="max-w-6xl self-center w-full flex-1">
        <h1 className={`${messages.length > 0 ? "" : ""} text-2xl`}>
        {emoji} {titleText}
        </h1>        
        <span className="text-xs text-muted-foreground">
          (powered by Palamar)
        </span>
        <form
          onSubmit={sendMessage}
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
