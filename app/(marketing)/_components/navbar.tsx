"use client";

import { Logo } from "@/components/logo";
import { MobileToggle } from "@/components/mobile-toggle";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
//import { ModeToggle } from "@/components/mode-toggle";
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
      <nav className="px-3 py-4 bg-white border-b border-zinc-800 dark:bg-zinc-900">
        <div className="flex items-center justify-between max-w-6xl mx-auto w-full">
          <Logo />
          <div className="flex items-center gap-2 pr-4 animate-fade-left">
            {isMobile ? (
              <MobileToggle />
            ) : (
              <>
                <Link
                  className={cn("p-2 hover:bg-zinc-500/10 rounded-md")}
                  role="link"
                  href="/blog"
                >
                  <p className="text-base font-semibold flex flex-col">Blog</p>
                </Link>
                <Link
                  className={cn("p-2 hover:bg-zinc-500/10 rounded-md")}
                  role="link"
                  href="/projects"
                >
                  <p className="text-base font-semibold flex flex-col">
                    Projetos
                  </p>
                </Link>
                <Button
                  className={cn(
                    "p-2 hover:bg-zinc-500/10 rounded-md cursor-pointer"
                  )}
                  variant="ghost"
                  onClick={contact.onOpen}
                >
                  <p className="text-base font-semibold flex flex-col">Contato</p>
                </Button>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
