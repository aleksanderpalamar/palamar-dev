"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BadgeCheck, ChevronDown, GithubIcon, Linkedin } from "lucide-react";
import Link from "next/link";

export const SidebarHeader = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="focus:outline-none">
        <button
          className="w-full text-md font-semibold px-3 flex
          items-center h-12 border-violet-200
          dark:border-neutral-800 border-b-2
          hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 
          transition cursor-pointer"
        >
          <p className="flex items-center">
            Palamar.Dev <BadgeCheck className="h-4 w-4 ml-1 text-violet-500" />
          </p>
          <ChevronDown className="h-5 w-5 ml-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 text-xs font-medium text-black
      dark:text-neutral-400 space-y-[2px]"
      >
        <Link href="https://github.com/aleksanderpalamar" target="_blank">
          <DropdownMenuItem className="flex items-center justify-between gap-x-2 cursor-pointer">
            <GithubIcon className="h-6 w-6 bg-slate-200 rounded p-1" />
            <span className="text-xs">@aleksanderpalamar</span>
          </DropdownMenuItem>
        </Link>
        <Link
          href="https://www.linkedin.com/in/aleksanderpalamar/"
          target="_blank"
        >
          <DropdownMenuItem className="flex items-center justify-between gap-x-2 cursor-pointer">
            <Linkedin className="h-6 w-6 text-blue-500 bg-blue-200 rounded p-1" />
            <span className="text-xs">@aleksanderpalamar</span>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
