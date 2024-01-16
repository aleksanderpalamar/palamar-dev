"use client";

import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { Title } from "./title";

export const Heading = () => {
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
    <div className="w-full flex flex-col dark:bg-zinc-900">
      <div className="max-w-6xl p-2 space-y-4 mt-14">
        <Title />
      </div>
      <Separator className="my-4 w-full bg-muted-foreground/25 dark:bg-zinc-700" />
    </div>
  );
};
