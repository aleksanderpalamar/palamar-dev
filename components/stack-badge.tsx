"use client";

import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

type StackBadgeProps = {
  name: string
  icon: string
  className?: string
}

const Stacks = [
  {
    name: "Next.js",
    icon: "",
    className: "bg-gray-900/10 text-gray-900 dark:text-gray-100 hover:bg-gray-900/20 transition-all",    
  },
  {
    name: "React",
    icon: "",
    className: "bg-sky-500/10 text-sky-500 hover:bg-sky-500/20 transition-all",
  },
  {
    name: "JavaScript",
    icon: "",
    className: "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 transition-all",
  },
  {
    name: "TypeScript",
    icon: "",
    className: "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-all",
  },
  {
    name: "Tailwind",
    icon: "",
    className: "bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 transition-all",
  },
  {
    name: "Node.js",
    icon: "",
    className: "bg-lime-500/10 text-lime-500 hover:bg-lime-500/20 transition-all",    
  },  
] as StackBadgeProps[]

export const StackBadge = () => {
  return (
    <div className="flex items-center gap-2 animate-fade-up">
      {Stacks.map((stack) => (
        <Badge
          key={stack.name}
          className={cn(stack.className)}
        >
          {stack.name}
        </Badge>
      ))}
    </div>
  )
}