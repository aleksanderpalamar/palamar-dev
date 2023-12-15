"use client";

import { VT323 } from "next/font/google";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const bits = VT323({
  subsets: ["latin"],
  weight: ["400"],
});

export const Title = () => {
  return (
    <>
      <h1
        className={cn(
          "md:text-4xl text-2xl self-start font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-orange-500 animate-typing whitespace-nowrap overflow-hidden text-center border-r-4 border-violet-500 border:animate-blink-cursor",
          bits.className
        )}
      >
        Hi, I&apos;m <span>Aleksander Palamar </span>
      </h1>
      <p className={cn(
        "text-gray-500 dark:text-gray-50 flex items-center gap-2 animate-fade-right text-lg",
        bits.className
      )}>
        Web Developer |
        <Badge className={cn(
          "bg-violet-500/10 text-violet-500 hover:bg-violet-500/20 transition-all text-base",
          bits.className
        )}>
          FullStack
        </Badge>
      </p>
    </>
  );
};
