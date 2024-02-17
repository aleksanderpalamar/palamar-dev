"use client";

import { useChat } from "ai/react";
import { SendHorizonal } from "lucide-react";

export default function ChatPage() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
  } = useChat();
  return (
    <div
      className="flex flex-col w-full h-full p-4 bg-zinc-800"
    >
      {messages.map((message) => {
        return (
          <div 
            key={message.id}
            className="flex flex-col p-2 my-2 bg-zinc-900 rounded-lg w-full self-center max-w-6xl"
          >
            <div
              className="text-violet-500 font-bold uppercase w-full 
              text-right text-sm whitespace-nowrap overflow-hidden overflow-ellipsis"
            >{message.role}</div>
            <div
              className="text-white w-full break-words whitespace-pre-wrap 
              overflow-hidden overflow-ellipsis text-sm"
            >{message.content}</div>
          </div>
        )
      })}
      <form
        onSubmit={handleSubmit}
        className="flex w-full h-12 mt-4 rounded-lg space-x-2 max-w-6xl self-center bg-zinc-900"
      >
        <input 
          placeholder="Type a message"
          value={input}
          onChange={handleInputChange}
          className="flex-1 p-2 border-none rounded-lg focus:outline-none
          justify-self-end bg-zinc-900 text-white"
        />
        <button
          className="flex items-center justify-center w-12 h-12 bg-violet-500 
          rounded-lg focus:outline-none focus:bg-violet-600"
        >
          <SendHorizonal className="w-5 h-5" />
        </button>
      </form>
    </div>
  )
}