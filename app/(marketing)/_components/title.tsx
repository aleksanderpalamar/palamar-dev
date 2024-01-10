"use client";

import { VT323, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"
import { Description } from "./description";
const bits = VT323({
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
})

export function Title() {
  const words = [
    {
      text: "Olá,",
    },
    {
      text: "eu sou",
    },    
    {
      text: "Aleksander Palamar",
      className: "text-violet-500 dark:text-violet-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[25rem]">      
      <TypewriterEffectSmooth words={words} />
      <p className={cn(
        "text-gray-500 dark:text-gray-50 flex items-center gap-2 animate-fade-right text-base",
        poppins.className
      )}>
        Web Developer |
        <Badge className={cn(
          "bg-[#8257e6]/10 text-violet-500 hover:bg-[#8257e6]/20 transition-all text-sm",
          poppins.className
        )}>
          FullStack
        </Badge>
      </p>
      <Description />      
    </div>
  );
}
