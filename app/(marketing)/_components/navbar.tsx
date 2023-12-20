"use client";

import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { Loader } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { isAuthenticated, isLoading } = useConvexAuth();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  switch (isMounted) {
    case false:
      return null;
  }

  return (
    <>
      <nav
        className="fixed z-50 top-0 w-full h-14 px-4 border-b 
        shadow-sm bg-white/10 backdrop-blur-lg dark:bg-zinc-900/10 dark:backdrop-blur-lg flex items-center"
      >
        <div className="flex items-center gap-x-4">
          <Logo />
        </div>
        <div className="ml-auto flex items-center gap-2 pr-4 animate-fade-left">
          <Link
            className={cn(
              "p-1 border-l-2 border-r-2 border-zinc-700/75 hover:bg-zinc-500/10 text-base"
            )}
            role="link"
            href="/blog"
          >
            Blog
          </Link>
          {isLoading && (
            <Loader className="w-4 h-4 animate-spin text-gray-500 dark:text-gray-50" />
          )}
          {isAuthenticated && !isLoading && (
            <div
              className="p-1 border-l-2 border-r-2 border-zinc-700/75 hover:bg-zinc-500/10 text-base"
              role="link"
            >
              <Link href="/documents" className="flex items-center gap-x-2">
                Dashboard
              </Link>
            </div>
          )}
          {!isAuthenticated && !isLoading && (
            <SignInButton mode="modal">
              <div
                role="button"
                className="p-1 border-l-2 border-r-2 border-zinc-700/75 hover:bg-zinc-500/10 text-base"
              >
                Área restrita
              </div>
            </SignInButton>
          )}
          <ModeToggle />
        </div>
      </nav>
    </>
  );
};
