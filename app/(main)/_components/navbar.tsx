"use client";

import { MobileToggle } from "@/components/mobile-toggle"
import { Logo } from "./logo"
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [])

  switch (isMounted) {
    case false:
      return null
  }

  return (
    <nav className="fixed z-50 top-0 w-full h-14 px-4 border-b
    shadow-sm bg-violet-100 dark:bg-[#313338] flex items-center">
      <div className="flex items-center gap-x-4">
        <Logo />        
      </div>
      <div className="ml-auto flex items-center gap-x-2 mr-14">
        <MobileToggle />
      </div>
    </nav>
  )
}