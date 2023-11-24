"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Hash } from "lucide-react";
import { MobileToggle } from "./mobile-toggle";
import { useRouter } from "next/navigation";
import { ActionTooltip } from "./action-tooltip";

export const Header = () => {
  const router = useRouter();

  const handleButtonBack = () => {
    router.push("/");
  };

  return (
    <div
      className="tex-md font-semibold px-3 flex items-center justify-between h-12
    border-violet-200 dark:border-zinc-700/75 border-b-2 bg-violet-100 dark:bg-[#313338] fixed top-0 left-0 right-0 z-50"
    >
      <ActionTooltip label="Menu" side="left" align="center">
        <div className="hover:bg-neutral-200/75 dark:hover:bg-neutral-900 rounded flex items-center">
          <MobileToggle />          
        </div>
      </ActionTooltip>
      <div className="flex items-center space-x-2">        
        <ActionTooltip label="Back" side="right" align="center">
          <Button
            variant="ghost"
            size="icon"
            className="bg-emerald-500 group dark:hover:bg-emerald-400 text-zinc-950 dark:text-zinc-950 md:hidden"
            onClick={handleButtonBack}
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </ActionTooltip>
      </div>
    </div>
  );
};
