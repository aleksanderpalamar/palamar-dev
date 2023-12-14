"use client";

import { ActionTooltip } from "../action-tooltip";
import { redirect, useParams, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type ItemNavigationProps = {
  id: string;
  label: string;
  imageUrl: string
  link?: string
  target?: string;
};

export const NavigationItem = ({
  id,
  label,
  imageUrl,
  link,
  target  
}: ItemNavigationProps) => {  
  const params = useParams();  

  return (
    <ActionTooltip label={label} side="right" align="center">
      <div        
        className="group relative flex items-center cursor-pointer text-violet-500 dark:text-violet-50 hover:text-violet-50"
      >
        <div
          className={cn(
            "absolute left-0 bg-violet-500 dark:bg-white rounded-r-full transition-all w-[4px]",
            params?.id !== id && "group-hover:h-[20px]",
            params?.id === id ? "h-[36px]" : "h-[8px]"
          )}
        />
        <div
          className={cn(
            "relative flex mx-3 mt-2 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-violet-200 dark:bg-neutral-700 group-hover:bg-violet-500",
            params?.id === id && "bg-primary/10 text-primary rounded-[16px]"
          )}
        >
          <Link href={`${link}`} target={`${target}`}>
            <Image fill src={imageUrl} alt={label} className="object-cover" />
          </Link>          
        </div>
      </div>
    </ActionTooltip>
  );
};
