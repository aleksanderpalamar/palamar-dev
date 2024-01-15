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
    <div className="w-full flex flex-col items-center justify-center dark:bg-zinc-900">
      <div className="max-w-6xl p-2 space-y-4 mt-14">
        <Title />
      </div>
      <Separator className="my-4 w-full bg-muted-foreground/25 dark:bg-zinc-700" />
    </div>
  );
};
