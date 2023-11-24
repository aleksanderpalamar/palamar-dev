"use client";

import { useModal } from "@/hooks/use-modal";
import { ActionTooltip } from "../action-tooltip";

interface ItemNavigationProps {
  label?: string;
  icon?: React.ReactNode;
}

export const NavigationAction = ({ icon, label }: ItemNavigationProps) => {
  const { onOpen } = useModal();

  return (
    <ActionTooltip label="About" side="right" align="center">
      <button onClick={() => {}} className="group flex items-center">
        <div
          className="flex mx-3 h-[48px] w-[48px] rounded-[24px] 
        group-hover:rounded-[16px] transition-all
        overflow-hidden items-center justify-center
        bg-background dark:bg-neutral-700 group-hover:bg-violet-500"
        >
          {icon}
          {label}
        </div>
      </button>
    </ActionTooltip>
  );
};
