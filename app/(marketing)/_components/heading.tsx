"use client";

import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useContact } from "@/hooks/use-contact";
import { useDownload } from "@/hooks/use-download";
import { LoaderIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Title } from "./title";
import { Description } from "./description";
import { VT323 } from "next/font/google";
import { cn } from "@/lib/utils";

const bits = VT323({
  subsets: ["latin"],
  weight: ["400"],
})


export const Heading = () => {
  const contact = useContact();
  const download = useDownload();  
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  switch (isMounted) {
    case false:
      return (
        <div className="w-full h-full flex items-center justify-center">
          <Skeleton className="w-64 h-64 flex flex-col items-center justify-center">
            <LoaderIcon className="w-8 h-8 animate-spin text-gray-500 dark:text-gray-50" />
          </Skeleton>
        </div>
      );
  }

  return (
    <div className="max-w-[1280px] space-y-4 flex flex-col px-3 py-4">
      <div className="flex flex-col space-y-2">
      <Title />
      
      </div>
      <Description />
      <div className="mt-4 flex items-center justify-center self-end space-x-2">
        <div
          className={cn(
            "p-2 border-l-2 border-r-2 border-emerald-500 dark:border-zinc-700/75 dark:hover:bg-zinc-700/75 text-lg",
            bits.className
          )}
          role="button"
          onClick={contact.onOpen}
          aria-label="Get in touch"          
        >
          Get In Touch
        </div>
        <div
          className={cn(
            "ml-4 p-2 border-l-2 border-r-2 border-emerald-500 dark:border-zinc-700/75 dark:hover:bg-zinc-700/75 text-lg",
            bits.className
          )}
          onClick={download.onOpen}
          aria-label="Download CV"
          role="button"
        >
          Resume
        </div>        
      </div>           
      <Separator className="my-4 w-full bg-muted-foreground/25 dark:bg-zinc-700" />           
    </div>
  );
};
