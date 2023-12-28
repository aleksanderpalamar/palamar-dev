"use client";

import { Logo } from "@/components/logo";
import { MobileToggle } from "@/components/mobile-toggle";
import { ModeToggle } from "@/components/mode-toggle";
import { useContact } from "@/hooks/use-contact";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const contact = useContact();

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

  switch (isMounted) {
    case false:
      return null;
  }

  return (
    <>
      <nav
        className="fixed z-50 top-0 w-full h-20 px-4 md:px-4 border-b 
        shadow-sm bg-white/10 backdrop-blur-lg dark:bg-zinc-900/10 dark:backdrop-blur-lg flex items-center"
      >
        <div className="flex items-center justify-between md:pl-80 md:pr-80 lg:pl-80 lg:pr-80 w-full">
        <div className="flex items-center gap-x-4">
          <Logo />
        </div>
        <div className="flex items-center gap-2 pr-4 animate-fade-left">
          {isMobile ? (
            <MobileToggle />
          ) : (
            <>              
              <Link
                className={cn(
                  "p-1 border-l-2 border-r-2 border-zinc-700/75 hover:bg-zinc-500/10 text-base"
                )}
                role="link"
                href="/blog"
              >
                Blog
              </Link>
              <Link
                className={cn(
                  "p-1 border-l-2 border-r-2 border-zinc-700/75 hover:bg-zinc-500/10 text-base"
                )}
                role="link"
                href="/projects"
              >
                Projetos
              </Link>
              <div
                className={cn(
                  "p-1 border-l-2 border-r-2 border-zinc-700/75 hover:bg-zinc-500/10 text-base cursor-pointer"
                )}
                role="link"
                onClick={contact.onOpen}
              >
                Contato
              </div>
            </>
          )}
          <ModeToggle />
        </div>
        </div>
      </nav>
    </>
  );
};
