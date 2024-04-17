"use client"

import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "./ui/avatar"

type UserAvatarProps = {
  className?: string
  src?: string
}

export const AvatarComponent = ({ className, src }: UserAvatarProps) => {
  return (
    <Avatar className={cn(
      "w-48 h-48 md:w-64 md:h-64",
      className
    )}>
      <AvatarImage src={src} />
    </Avatar>
  )  
}