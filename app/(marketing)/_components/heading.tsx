"use client";

import { Separator } from "@/components/ui/separator";
import { useContact } from "@/hooks/use-contact";
import { useDownload } from "@/hooks/use-download";
import { MailIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Title } from "./title";
import { Description } from "./description";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { ActionTooltip } from "@/components/action-tooltip";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export const Heading = () => {
  const contact = useContact();
  const download = useDownload();
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const checkWindowSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkWindowSize();

    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  switch (isMounted) {
    case false:
      return null;
  }

  return (
    <div className="max-w-[1280px] space-y-4 flex flex-col px-3 py-4">
      <div className="flex flex-col space-y-2">
        <Title />
      </div>
      <Description />
      <div className="mt-4 flex items-center justify-center self-end space-x-2">
        {isMobile ? (
          <ActionTooltip
            label="Form de contato"
            align="end"
            aria-label="Form de contato"
          >
            <div
              className={cn(
                "p-2 border-l-2 border-r-2 border-zinc-700/75 hover:bg-zinc-500/10 text-base",
                poppins.className
              )}
              role="button"
              onClick={contact.onOpen}
              aria-label="Get in touch"
            >
              <MailIcon className="w-6 h-6" />
            </div>
          </ActionTooltip>
        ) : (
          <></>
        )}
        <ActionTooltip
          label="Download CV"
          align="end"
          aria-label="Download Curriculo"
        >
          <div
            className={cn(
              "ml-4 p-2 border-l-2 border-r-2 border-zinc-700/75 hover:bg-zinc-500/10 text-base",
              poppins.className
            )}
            onClick={download.onOpen}
            aria-label="Download CV"
            role="button"
          >
            CV
          </div>
        </ActionTooltip>
      </div>
      <Separator className="my-4 w-full bg-muted-foreground/25 dark:bg-zinc-700" />
    </div>
  );
};
