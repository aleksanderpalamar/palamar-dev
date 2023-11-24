/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { ActionTooltip } from "../action-tooltip"

export const NavigationLogo = () => {
  return (
    <ActionTooltip label="Palamar Dev" side="right" align="center">
      <div className="group flex items-center">
        <div
          onClick={() => {}}
          className="flex mx-3 h-[48px] w-[48px] rounded-[24px] 
        group-hover:rounded-[16px] transition-all
        overflow-hidden items-center justify-center
        bg-background dark:bg-neutral-700 group-hover:bg-violet-500
        text-violet-500 dark:text-violet-500 hover:text-violet-50 
        dark:hover:text-violet-50"
        >
          PD
        </div>
      </div>
    </ActionTooltip>
  )
}