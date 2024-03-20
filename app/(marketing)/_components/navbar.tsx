"use client";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { LanguageContext } from "@/context/language-context";
import { useContext, useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const { language, changeLanguage } = useContext(LanguageContext);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  function changeLanguageHandler(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    changeLanguage(language === "en" ? "pt" : "en");
  }

  return (
    <nav className="container mx-auto flex items-center justify-between p-4 max-w-[73rem]">
      <Logo />
      <div className="flex items-center gap-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            className={cn(
              "relative",
              "w-10 h-10",
              "rounded-full",
              "hover:bg-zinc-100",
              "focus:outline-none",
              "focus-visible:ring-2",
              "focus-visible:ring-offset-2",
              "focus-visible:ring-offset-white",
              "focus-visible:ring-white",
              "dark:hover:bg-zinc-900",
              "dark:focus-visible:ring-offset-black",
              "dark:focus-visible:ring-black"
            )}
          >
            <Button
              variant="ghost"
              size="icon"
              className="text-sm font-bold text-zinc-900 dark:text-zinc-50 border-none"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className={cn(
              "absolute",
              "right-0",
              "w-[17rem]",
              "mt-2",
              "origin-top-right",
              "rounded-md",
              "shadow-lg",
              "bg-white",
              "ring-1",
              "ring-black",
              "ring-opacity-5",
              "dark:bg-zinc-950",
              "dark:ring-offset-black"
            )}
          >
            <DropdownMenuItem
              className={cn(
                "flex",
                "items-center",
                "justify-between",
                "w-full",
                "px-4",
                "py-2",
                "text-sm",
                "text-zinc-900",
                "hover:bg-zinc-100",
                "dark:text-zinc-50",
                "dark:hover:bg-zinc-800"
              )}
            >
              <Link href="/">Home</Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              className={cn(
                "flex",
                "items-center",
                "justify-between",
                "w-full",
                "px-4",
                "py-2",
                "text-sm",
                "text-zinc-900",
                "hover:bg-zinc-100",
                "dark:text-zinc-50",
                "dark:hover:bg-zinc-800"
              )}
            >
              <Link href="/about">About</Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              className={cn(
                "flex",
                "items-center",
                "justify-between",
                "w-full",
                "px-4",
                "py-2",
                "text-sm",
                "text-zinc-900",
                "hover:bg-zinc-100",
                "dark:text-zinc-50",
                "dark:hover:bg-zinc-800"
              )}
            >
              <Link href="/blog">Blog</Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              className={cn(
                "flex",
                "items-center",
                "justify-between",
                "w-full",
                "px-4",
                "py-2",
                "text-sm",
                "text-zinc-900",
                "hover:bg-zinc-100",
                "dark:text-zinc-50",
                "dark:hover:bg-zinc-800"
              )}
            >
              <Link href="/projects">Projects</Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              className={cn(
                "flex",
                "items-center",
                "justify-between",
                "w-full",
                "px-4",
                "py-2",
                "text-sm",
                "text-zinc-900",
                "hover:bg-zinc-100",
                "dark:text-zinc-50",
                "dark:hover:bg-zinc-800"
              )}
            >
              <Link href="/setup">Setup</Link>
            </DropdownMenuItem>
            <Separator />
            <DropdownMenuItem>
              <Button
                variant="super"
                size="sm"
                className={cn(
                  "flex",
                  "items-center",
                  "justify-between",
                  "w-full",
                  "px-4",
                  "py-2",
                  "text-sm",
                  "text-zinc-100",
                  "bg-transparent",
                  "border-[1px]",
                  "border-zinc-700",
                )}
                onClick={changeLanguageHandler}
                aria-label="Change language"
                title="Change language"
              >
                <span>{language === "en" ? "English" : "Portuguese"}</span>
                {language === "en" ? `🇺🇸` : `🇧🇷` }
                
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};
