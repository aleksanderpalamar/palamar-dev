"use client";

import { GithubIcon, Linkedin } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <div
      className="fixed z-50 bottom-0 w-full h-14 px-4 border-t
    shadow-sm bg-white dark:bg-zinc-900 flex items-center"
    >
      <div className="w-full flex items-center justify-between gap-x-2 mr-8">
        <div className="flex items-center gap-x-2 ml-4">          
        </div>
        <p className="text-xs text-muted-foreground font-medium">
          copyright © {new Date().getFullYear()}
          <span className="text-muted-foreground ml-2">
            Palamar
            <span className="text-muted-foreground font-black">.</span>
            Dev
          </span>
        </p>
      </div>
    </div>
  );
};
