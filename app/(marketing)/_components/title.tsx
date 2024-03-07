"use client";

import { LanguageContext } from "@/context/language-context";
import { useContext } from "react";

export function Title() {
  const { language } = useContext(LanguageContext);

  return (
    <div className="flex flex-col items-start justify-center h-full">
      <h3 className="text-2xl font-bold" aria-label="LATEST UPDATES">
        {language === "en" ? "LATEST UPDATES" : "ÚLTIMAS ATUALIZAÇÕES"}
      </h3>
    </div>
  );
}
