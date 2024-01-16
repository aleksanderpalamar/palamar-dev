"use client";

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Description } from "./description";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export function Title() {
  return (
    <div className="flex flex-col items-start justify-center h-full mt-14">
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-50 animate-fade-up" aria-label="Hi I'm Aleksander Palamar">
          Hi, I&apos;m Aleksander Palamar
        </h1>
        <p className="text-gray-500 dark:text-gray-50 flex items-center gap-2 animate-fade-right text-base" aria-label="Web Developer">
          Web Developer |
          <Badge
            className={cn(
              "bg-[#8257e6]/10 text-violet-500 hover:bg-[#8257e6]/20 transition-all text-sm",
              poppins.className
            )}
            aria-label="FullStack"
          >
            FullStack
          </Badge>
        </p>
        <Description />
      </div>
    </div>
  );
}
