"use client";

import { Logo } from "@/components/logo";
import { MobileToggle } from "@/components/mobile-toggle";
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
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-6xl mx-auto z-50 mb-40",
        className
      )}
    >
      <Menu setActive={setActive}>
        <div id="logo" className="flex items-center justify-between w-full">
          <Link href="/" className="flex items-center gap-x-2">
            <Image
              src="/images/favicon.png"
              width={20}
              height={20}
              alt="Logo"
            />
            <p className="text-[#8257e6]">Palamar.Dev</p>
          </Link>
          <MenuItem setActive={setActive} active={active} item="Sobre">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/about">
                <p>Sobre mim</p>
                <span className="text-zinc-500 text-sm truncate">
                  Descubra mais sobre mim e o que eu faço
                </span>
              </HoveredLink>
              <HoveredLink href="/projects">
                <p>Projetos</p>
                <span className="text-zinc-500 text-sm truncate">
                  Conheça os projetos que desenvolvi e os que estou
                  desenvolvendo
                </span>
              </HoveredLink>
              <HoveredLink href="/blog">
                <p>Blog</p>
                <span className="text-zinc-500 text-sm truncate">
                Esses são os meus artigos falando sobre tecnologia e programação.
                </span>
              </HoveredLink>
            </div>
          </MenuItem>
        </div>

        <MenuItem setActive={setActive} active={active} item="Contato">
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
    </div>
  );
};
