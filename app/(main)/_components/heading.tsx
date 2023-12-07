"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useContact } from "@/hooks/use-contact";
import { useDownload } from "@/hooks/use-download";
import { useProject } from "@/hooks/use-projects";
import { LoaderIcon } from "lucide-react";
import { useEffect, useState } from "react";

export const Heading = () => {
  const contact = useContact();
  const download = useDownload();
  const project = useProject();
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
    <div className="w-full space-y-4 flex flex-col">
      <h1 className="text-4xl self-start font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-orange-500">
        Aleksander Palamar
      </h1>
      <p className="text-gray-500 dark:text-gray-50 flex items-center gap-2">
        Software Engineer |
        <Badge className="text-violet-500 text-xs" variant="secondary">
          Fullstack
        </Badge>
      </p>
      <p className="text-gray-500 dark:text-gray-50 word-spacing-2 break-words p-2 text-justify">
        I am passionate about coding, and as a software engineer, I specialize
        in incredible technologies such as JavaScript, React, TypeScript, and
        Next.js. My professional journey is centered around crafting UI in
        accordance with UX, ensuring that each web experience not only functions
        seamlessly but also captivates users. While exploring these tools, I
        discover new ways to turn ideas into reality, all while sharing my
        enthusiasm through innovative projects and inspiring articles. I am here
        not just to write code but to create engaging and impactful digital
        narratives.
      </p>
      <div className="mt-4 flex items-center self-end space-x-2">
        <Button
          className="hover:bg-emerald-100 dark:hover:bg-zinc-700/75"
          variant="ghost"
          onClick={contact.onOpen}
          aria-label="Get in touch"
          size="sm"
        >
          Get In Touch
        </Button>
        <Button
          className="ml-4 bg-emerald-500 hover:bg-emerald-400 "
          onClick={download.onOpen}
          aria-label="Download CV"
          size="sm"
        >
          Download CV
        </Button>
        <Button
          className="ml-4 bg-violet-500 hover:bg-violet-400 "
          onClick={project.onOpen}
          aria-label="Projects"
          size="sm"
        >
          More Projects
        </Button>
      </div>
      <Separator className="my-4 w-full bg-muted-foreground/25 dark:bg-zinc-700" />
    </div>
  );
};
