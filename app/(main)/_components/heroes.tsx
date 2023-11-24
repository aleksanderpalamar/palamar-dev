"use client";

import { Banner } from "@/components/banner";

import { GitHubContribution } from "@/components/gitHubContribution";
import { LastPosted } from "@/components/last-posted";
import { Card, CardTitle } from "@/components/ui/card";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { BookMarkedIcon, LoaderIcon } from "lucide-react";
import { useEffect, useState } from "react";

export const Heroes = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  switch (isMounted) {
    case false:
      return (
        <div className="mt-4">
          <Skeleton className="w-64 h-64 flex flex-col items-center justify-center">
            <LoaderIcon className="w-8 h-8 animate-spin text-gray-500 dark:text-gray-50" />
          </Skeleton>
        </div>
      );

    default:
      return (
        <>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <Card className="p-1 border-[1px] hover:border-[1px] hover:border-muted-foreground rounded bg-transparent">
              <CardTitle className="text-lg font-bold">Lasts Posted</CardTitle>
              <ScrollArea className="flex-1 h-[20vh] w-full break-words">
                <LastPosted
                  title="Initialize a new project with Next.js 14 and Shadcn-UI"
                  href="https://appnotes.vercel.app/preview/3nwqs55rvd3gwhe0gssabwhq9ker5v0"
                />
              </ScrollArea>
            </Card>
            <Card
              className="p-1 border-[0px] hover:border-[0px] hover:border-muted-foreground rounded bg-transparent hidden md:block"
              aria-label="Empty box"
            >
              <CardTitle className="text-lg font-bold"></CardTitle>
              <ScrollArea className="flex-1 h-[20vh] w-full break-words"></ScrollArea>
            </Card>
            <Card
              className="p-1 border-[1px] hover:border-[1px] hover:border-muted-foreground rounded bg-transparent"
              aria-label="Contribution activity on GitHub"
            >
              <CardTitle className="text-lg font-bold">
                Contribution activity on GitHub
              </CardTitle>
              <ScrollArea className="flex-1 h-[20vh] w-full break-words">
                <GitHubContribution username="aleksanderpalamar" />
              </ScrollArea>
            </Card>            
          </div>
          <Banner
            title="Notes"
            image={
              <BookMarkedIcon className="w-16 h-16 text-violet-500 dark:text-violet-500" />
            }
            description="Notes is the connected workspace for your ideas, documents, and
            plans, faster work and better collaboration."
            span="Get Started"
            handleGetStarted={() => {
              window.location.href = "https://appnotes.vercel.app/";
            }}
          />
        </>
      );
  }
};
