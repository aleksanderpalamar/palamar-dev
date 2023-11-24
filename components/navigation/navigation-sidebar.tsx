"use client";

import { User, User2 } from "lucide-react";
import { ModeToggle } from "../mode-toggle";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { NavigationItem } from "./navigation-item";
import { NavigationLogo } from "./navigation-logo";
import { ActionTooltip } from "../action-tooltip";

type ItemNavigationProps = {
  id: string;
  label: string;
  imageUrl: string;
  link?: string;
};

export const NavigationSidebar = () => {
  const Items = [
    {
      id: "home",
      label: "Palamar.Dev",
      imageUrl: "https://github.com/aleksanderpalamar.png",
      link: "https://palamardev.vercel.app/",
    },
    {
      id: "xteam",
      label: "xTeam Chat Application development project by Aleksander Palamar",
      imageUrl:
        "https://cdn.discordapp.com/attachments/811800332006457356/1156727418980139120/image.png?ex=651605db&is=6514b45b&hm=7a027442e33433ce527201beda4aefbc3f86e3081de662f91f087180034ddce7&",
      link: "https://team-chat-application-production-9355.up.railway.app/",
    },
    {
      id: "palamar ui",
      label: "Palamar UI Library development project by Aleksander Palamar",
      imageUrl:
        "https://cdn.discordapp.com/attachments/811800332006457356/1156733509864542318/palamar-logo_4.png?ex=65160b87&is=6514ba07&hm=2ea6f557b2b71b99413da6fa05a7a01f6d63371f1c2d85206db2c90f4f6e8535&",
      link: "https://github.com/aleksanderpalamar/palamar-ui",
    },
  ];

  return (
    <div
      className="space-y-4 flex flex-col items-center h-full 
    text-primary w-full dark:bg-[#1e1f22] 
    bg-[#f3e8ff] py-3 border-r-[1px] border-violet-300 dark:border-zinc-700"
    >
      <NavigationLogo />
      <Separator className="h-[1px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto" />
      <ScrollArea className="flex-1 w-full">
        <div className="flex flex-col gap-y-4">
          {Items.map((item: ItemNavigationProps) => (
            <NavigationItem key={item.id} {...item} />
          ))}
        </div>
      </ScrollArea>
      <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
        <ModeToggle />
      </div>
    </div>
  );
};
