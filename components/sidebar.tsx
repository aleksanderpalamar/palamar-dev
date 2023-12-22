"use client"

import { useContact } from "@/hooks/use-contact"
import { cn } from "@/lib/utils"
import { Code } from "lucide-react"
import Link, { LinkProps } from "next/link"

type itemNavigationProps = LinkProps & {
  id?: string
  label?: string
  href?: string
}

export const Sidebar = ({
  id,
  label,
  href,
  onClick,
  ...props
 }: itemNavigationProps) => {

  const Item = [
    {
      id: "home",
      label: "Home",
      href: "/",
    },
    {
      id: "blog",
      label: "Blog",
      href: "/blog",
    },
    {
      id: "projects",
      label: "Projetos",
      href: "/projects",
    },
  ] as itemNavigationProps[]

  return (
    <div className="flex flex-col w-full h-full p-4 space-y-4 bg-white dark:bg-zinc-900">
      {Item.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className={cn(
            "group mt-14 flex items-center justify-between p-2 border-l-2 border-r-2 border-zinc-700/75 hover:bg-zinc-500/10 text-base",
            id !== item.id && "group-hover:bg-violet-200/75",
            id === item.id ? "h-12" : "h-12"
          )}
          {...props}
        >
          <Code className="w-5 h-5" />
          <span className="text-xl font-normal">{item.label}</span>                    
        </Link>
      ))}           
    </div>
  )
}