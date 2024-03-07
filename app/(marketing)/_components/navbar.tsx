"use client";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { LanguageContext } from "@/context/language-context";
import { useContext } from "react";

export const Navbar = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  function changeLanguageHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    changeLanguage(language === "en"? "pt" : "en");
  }

  return (
    <nav className="container mx-auto flex items-center justify-between p-4 max-w-[73rem]">
      <Logo />
      <div className="flex items-center mr-2">
        <Button
          variant="ghost"
          size="sm"
          className="text-sm font-bold text-zinc-900 dark:text-zinc-50 border-[1px] border-zinc-700 rounded-md"
          onClick={changeLanguageHandler}
        >
          {language === "en"? "En" : "Pt"}
        </Button>
      </div>
    </nav>
  );
};






