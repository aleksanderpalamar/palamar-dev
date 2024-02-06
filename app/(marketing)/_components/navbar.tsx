"use client";

import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between p-4 max-w-[73rem]">
      <Logo />
      <div className="hidden md:flex space-x-8">
        <Link className="text-white hover:text-gray-300" href="/about">
          Sobre
        </Link>
        <Link className="text-white hover:text-gray-300" href="/projects">
          Projetos
        </Link>
        <Link className="text-white hover:text-gray-300" href="/blog">
          Blog
        </Link>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="/">
            <Logo />
            <span className="sr-only">Palamar.Dev</span>
          </Link>
          <div className="grid gap-2 py-6">            
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="/about"
            >
              Sobre
            </Link>
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="/projects"
            >
              Projetos
            </Link>
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="/blog"
            >
              Blog
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-x-2">
      <Image src="/images/favicon.png" width={20} height={20} alt="Logo" />
      <div className="text-white font-bold text-2xl">Palamar.Dev</div>
    </Link>
  );
}

function MenuIcon() {
  return (
    <div>
      <Menu className="h-6 w-6" />
    </div>
  );
}