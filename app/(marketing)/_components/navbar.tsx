"use client";

import { Logo } from "@/components/logo";
import { MobileToggle } from "@/components/mobile-toggle"
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { Loader, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
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
      <div className="ml-auto flex items-center gap-8 px-4">
        <MobileToggle />
        {isLoading && (
          <p className="text-gray-500 dark:text-gray-50 flex items-center gap-2">
            <Loader className="w-4 h-4 animate-spin text-gray-500 dark:text-gray-50" />
          </p>
        )}
        {isAuthenticated && !isLoading && (
          <Button className="bg-violet-500/10 hover:bg-violet-500/20 text-violet-500 border border-violet-500" asChild>
            <Link href="/documents">
              Dashboard
            </Link>
          </Button>
        )}
        {!isAuthenticated && !isLoading && (
          <SignInButton mode="modal">
            <Button className="bg-violet-500/10 hover:bg-violet-500/20 text-violet-500 border border-violet-500">
              <User className="w-4 h-4" />
            </Button>
          </SignInButton>
        )}
      </div>
    </nav>
  )
}