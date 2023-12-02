"use client";

import { ArrowRight,  } from "lucide-react";

interface LastPostedProps {  
  title?: string;
  href: string;
}

export const LastPosted = ({ title, href }: LastPostedProps) => {
  const handleOnClick = () => {
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onClick={handleOnClick}
      role="button"
      className="text-sky-500 text-xs 
    hover:bg-violet-500/10 rounded p-1 flex w-full items-center truncate"
    >
      <ArrowRight className="h-5 w-5 mr-1 text-orange-500" />
      {title}
    </div>
  );
};
