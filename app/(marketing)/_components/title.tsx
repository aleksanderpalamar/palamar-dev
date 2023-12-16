"use client";

import { VT323, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const bits = VT323({
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
})

export const Title = () => {
  return (
    <>
      <h1
        className={cn(
          "md:text-4xl text-xl self-start font-bold animate-typing whitespace-nowrap overflow-hidden text-center border-r-4 border-violet-500 border:animate-blink-cursor",
          poppins.className
        )}
      >
        Olá, eu sou <span className="text-[#8257e6]">Aleksander Palamar</span>
      </h1>
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
    </>
  );
};
