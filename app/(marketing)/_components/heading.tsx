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
          Hey, I&apos;m Palamar.Dev
          <p className="text-gray-500 dark:text-gray-50 flex items-center gap-2 animate-fade-right text-sm" 
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
        <p className="text-gray-400 mt-4">
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
    <header className="container mx-auto px-4 py-20">
      <h2 className="text-6xl font-bold leading-tight animate-fade-right">
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
      <p className="text-gray-400 mt-4">
        Creating amazing digital experiences, with a focus on performance and usability.
      </p>      
    </header>
  );
};
