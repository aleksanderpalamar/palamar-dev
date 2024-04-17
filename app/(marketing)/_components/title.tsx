"use client";

import { LanguageContext } from "@/context/language-context";
import { ReactNode, useContext, useEffect, useState } from "react";

type TitleProps = {
  title?: ReactNode;
  description?: ReactNode;
};

export function Title({ title, description }: TitleProps) {
  const { language } = useContext(LanguageContext);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex flex-col items-start justify-center h-full">
      <h1
        className="flex flex-col text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-4 text-left mb-4"
        aria-label={language}
      >
        {language === "en" ? "Projects" : "Projetos"}
        <span className="text-sm text-zinc-500 font-extralight text-justify">
          {language === "en"
            ? "These projects were developed with the intention of learning new technologies and improving the ones I already know, because I can&apos;t put them in practice and publish the codes of the projects I develop in my work, so I decided to create these projects personal."
            : "Esses projetos foram desenvolvidos com o objetivo de aprender novas tecnologias e aprimorar as que já conheço, pois não consigo colocar em prática e publicar os códigos dos projetos que desenvolvo em meu trabalho, então decidi criar esses projetos pessoais."}
        </span>
      </h1>
    </div>
  );
}
