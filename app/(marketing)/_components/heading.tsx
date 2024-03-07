"use client";

import { Badge } from "@/components/ui/badge";
import { LanguageContext } from "@/context/language-context";
import { useContext } from "react";

export const Heading = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="flex flex-col space-y-8 mt-8 self-start">
      <h2 className="text-4xl font-semibold leading-tight animate-fade-right">
        {language === "en"
         ? "Hi, I'm Aleksander Palamar"
          : "Olá, sou Aleksander Palamar"}
        <p
          className="text-gray-500 dark:text-gray-50 flex items-center gap-2 animate-fade-right text-sm leading-tight"
          aria-label="Web Developer"
        >
          Web Developer |
          <Badge
            className="bg-[#8257e6]/10 text-violet-500 hover:bg-[#8257e6]/20 transition-all text-xs"
            aria-label="FullStack"
          >
            FullStack
          </Badge>
        </p>
      </h2>
      <p className="font-medium text-zinc-400 mt-2">
        {language === "en"
         ? "Combining design and development, I continue to create unique projects."
          : "Combinando design e desenvolvimento, continuo a criar projetos únicos."}
      </p>
    </div>
  );
};
