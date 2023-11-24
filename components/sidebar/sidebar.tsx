"use client";

import { Hash, Newspaper } from "lucide-react";
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

  return (
    <div className="flex flex-col w-full h-full text-primary dark:bg-[#2b2d31] bg-violet-100">
      <SidebarHeader />
      <ScrollArea className="flex-1 px-3">
        <Accordion type="multiple">
          <AccordionItem value="text">
            <AccordionTrigger className="flex justify-between items-center">
              <span className="flex items-center">
                <Newspaper className="w-6 h-6 mr-2 text-violet-500 dark:text-violet-50"/>
                <p>General</p>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              {Items.map((item) => (
                <Link
                  href={item.href}
                  key={item.id}
                  className={cn(
                    "hover:bg-violet-200/75 group flex items-center justify-between dark:hover:bg-zinc-700/75 w-full rounded px-3",
                    id !== item.id && "group-hover:bg-violet-200/75",
                    id === item.id ? "h-12" : "h-12"
                  )}
                  {...props}
                >
                  <Hash className="ml-2 text-gray-400" />
                  <p>{item.label}</p>
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ScrollArea>
    </div>
  );
};
