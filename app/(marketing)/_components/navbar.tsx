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
          <ModeToggle />
        </div>
      </nav>
    </>
  );
};
