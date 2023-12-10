"use client";

import { Hash, Loader, Newspaper, Settings, User } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { SidebarHeader } from "./sidebar-header";
import Link, { LinkProps } from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { useConvexAuth } from "convex/react";
import { Button } from "../ui/button";
import { SignInButton } from "@clerk/clerk-react";

type ItemNavigationProps = LinkProps & {
  id?: string;
  label?: string;
  href?: string;
};

export const Sidebar = ({
  id,
  label,
  href,
  onClick,
  ...props
}: ItemNavigationProps) => {
  const Items = [
    {
      id: "home",
      label: "Home",
      href: "/",
    },
  ] as ItemNavigationProps[];
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="flex flex-col w-full h-full text-primary dark:bg-[#2b2d31] bg-violet-100">
      <SidebarHeader />
      <ScrollArea className="flex-1 px-3">
        <Accordion type="multiple">
          <AccordionItem value="text">
            <AccordionTrigger className="flex justify-between items-center">
              <span className="flex items-center">
                <Newspaper className="w-6 h-6 mr-2 text-violet-500 dark:text-violet-50" />
                <p>General</p>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              {Items.map((item) => (
                <Link
                  href={item.href}
                  key={item.id}
                  className={cn(
                    "hover:bg-violet-200/75 group flex items-center justify-between dark:hover:bg-zinc-700/75 w-full rounded px-3 mb-2",
                    id !== item.id && "group-hover:bg-violet-200/75",
                    id === item.id ? "h-12" : "h-12"
                  )}
                  {...props}
                >
                  <Hash className="ml-2 text-gray-400" />
                  <p>{item.label}</p>
                </Link>
              ))}
              {isLoading && (
                <p className="text-gray-500 dark:text-gray-50 flex items-center gap-2">
                  <Loader className="w-4 h-4 animate-spin text-gray-500 dark:text-gray-50" />
                </p>
              )}
              {isAuthenticated && !isLoading && (
                <Button
                  className="bg-violet-500/10 hover:bg-violet-500/20 text-violet-500 border border-violet-500 flex items-center gap-x-2 w-full"
                  asChild
                >                  
                  <Link href="/documents" className="flex items-center gap-x-2">
                  <Settings className="w-4 h-4" />
                    Dashboard
                  </Link>
                </Button>
              )}
              {!isAuthenticated && !isLoading && (
                <SignInButton mode="modal">
                  <Button className="bg-violet-500/10 hover:bg-violet-500/20 text-violet-500 border border-violet-500 gap-x-2 flex items-center w-full">
                    <User className="w-4 h-4" />
                    Login
                  </Button>
                </SignInButton>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ScrollArea>
    </div>
  );
};
