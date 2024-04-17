"use client"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type ActionTootipProps = {
  children: React.ReactNode
  label: string
  side?: "top" | "bottom" | "left" | "right"
  align?: "start" | "center" | "end"
}

export const ActionTooltip = ({ children, label, side, align }: ActionTootipProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={50}>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent side={side} align={align}>
          <p className="text-xs font-semibold capitalize">
            {label}
          </p>
        </TooltipContent>
      </Tooltip>      
    </TooltipProvider>
  )
}