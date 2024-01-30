"use client";

import { Button } from "@/components/ui/button";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
//import { ModeToggle } from "@/components/mode-toggle";
import { useContact } from "@/hooks/use-contact";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type NavbarProps = {
  className?: string;
};

export const Navbar = ({ className }: NavbarProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const contact = useContact();

  useEffect(() => {
    let element = document.getElementById("logo");
    if (element) {
      let style = window.getComputedStyle(element);
      let height = style.getPropertyValue("height");
      let logo = document.getElementById("logo");
      if (logo) {
        logo.style.height = height;
      }
    } else {
      console.error("Element not found");
    }
    setIsMounted(true);
  }, []);

  switch (isMounted) {
    case false:
      return null;
  }

  return (
    <header
      className={cn(
        "fixed top-10 inset-x-0 max-w-6xl mx-auto z-50 mb-40",
        className
      )}
    >
      <nav>
      <Menu setActive={setActive}>
        <div id="logo" className="flex items-center justify-between w-full">
          <Link href="/" className="flex items-center gap-x-2">
            <Image
              src="/images/favicon.png"
              width={20}
              height={20}
              alt="Logo"
            />
            <p className="">Palamar.Dev</p>
          </Link>
          <MenuItem setActive={setActive} active={active} item="About">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/about">
                <p className="flex flex-col">
                  About me
                  <span className="text-zinc-500 text-sm hidden md:flex">
                    Find out more about me and what I do
                  </span>
                </p>
              </HoveredLink>
              <HoveredLink href="/projects">
                <p className="flex flex-col">
                  Projects
                  <span className="text-zinc-500 text-sm hidden md:flex">
                    Get to know the projects I&apos;ve developed and the ones
                    I&apos;m developing
                  </span>
                </p>
              </HoveredLink>
              <HoveredLink href="/blog">
                <p className="flex flex-col">
                  Blog
                  <span className="text-zinc-500 text-sm hidden md:flex">
                    These my articles talking about technology and programming.
                  </span>
                </p>
              </HoveredLink>
            </div>
          </MenuItem>
        </div>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <Button
              className={cn(
                "p-2 hover:bg-zinc-500/10 rounded-md cursor-pointer"
              )}
              variant="ghost"
              onClick={contact.onOpen}
            >
              <p className="text-base font-semibold flex flex-col">Contato</p>
            </Button>
          </div>
        </MenuItem>
      </Menu>
      </nav>
    </header>
  );
};
