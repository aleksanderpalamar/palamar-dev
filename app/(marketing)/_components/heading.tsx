"use client";

import { useEffect, useState } from "react";
import { CircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const Heading = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);  

  useEffect(() => {
    setIsMounted(true);

    const checkWindowSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkWindowSize();

    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  if (isMobile) {
    return (
      <header className="container mx-auto px-2 py-10">
        <h2 className="text-xl font-bold leading-tight">
          Hey, I&apos;m Aleksander Palamar
          <p className="text-zinc-500 dark:text-gray-50 flex items-center gap-2 animate-fade-right text-sm" 
          aria-label="Web Developer">
            Web Developer |
            <Badge
              className="bg-[#8257e6]/10 text-violet-500 hover:bg-[#8257e6]/20 transition-all text-xs"
              aria-label="FullStack"
            >
              FullStack
            </Badge>
          </p>
        </h2>
        <p className="font-extralight text-zinc-400 mt-4">
          Unindo design e código, sigo criando projetos únicos.
        </p>        
      </header>      
    );
  }

  switch (isMounted) {
    case false:
      return null;
  }

  return (
    <div className="flex flex-col space-y-8 mt-8">
      <h2 className="text-4xl font-semibold leading-tight animate-fade-right">
        Hi, I&apos;m Aleksander Palamar
        <p className="text-gray-500 dark:text-gray-50 flex items-center gap-2 animate-fade-right text-sm leading-tight" 
          aria-label="Web Developer">
            Web Developer |
            <Badge
              className="bg-[#8257e6]/10 text-violet-500 hover:bg-[#8257e6]/20 transition-all text-xs"
              aria-label="FullStack"
            >
              FullStack
            </Badge>
          </p>
      </h2>
      <p className="font-extralight text-zinc-400 mt-4">
        Unindo design e código, sigo criando projetos únicos.
      </p>      
    </div>
  );
};
