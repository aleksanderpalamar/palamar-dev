"use client";

import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useContact } from "@/hooks/use-contact";
import { useDownload } from "@/hooks/use-download";
import { LoaderIcon, MailIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Title } from "./title";
import { Description } from "./description";
import { VT323, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { WhatsappLogo } from "phosphor-react";
import { ActionTooltip } from "@/components/action-tooltip";

const bits = VT323({
  subsets: ["latin"],
  weight: ["400"],
});

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
        <ActionTooltip
          label="Entre em contato pelo whatsapp"
          align="end"
          aria-label="Entre em contato pelo whatsapp"
        >
          <div
            className={cn(
              "p-2 border-l-2 border-r-2 border-zinc-700/75 hover:bg-zinc-500/10 text-base",
              poppins.className
            )}
            role="button"
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send?phone=5541987938328",
                "_blank"
              )
            }
            aria-label="Get in touch"
          >
            <WhatsappLogo className="w-6 h-6" />
          </div>
        </ActionTooltip>

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
          aria-label="Download Curri"
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
