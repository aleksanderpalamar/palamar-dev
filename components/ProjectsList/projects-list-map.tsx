/* eslint-disable @next/next/no-img-element */
"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { projects } from "./projects";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const BadgeConfirm = [
  {
    id: 1,
    name: "In Production",
    color: "text-emerald-500 text-xs",
    bgColor: "bg-emerald-500/10 rounded-full hover:bg-emerald-500/20 h-4",
  },
  {
    id: 2,
    name: "In Progress",
    color: "text-orange-500 text-xs",
    bgColor: "bg-orange-500/10 rounded-full hover:bg-orange-500/20 h-4",
  },
];

export const ProjectsListMap = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  switch (isMounted) {
    case false:
      return null;
  }

  return (
    <ScrollArea className="w-full h-[80vh] flex-1 flex-col">
      {projects.map((project) => (
        <Card
          key={project.id}
          className="flex flex-col dark:bg-transparent hover:bg-violet-100/25 dark:hover:bg-zinc-700/75 overflow-hidden mt-2 w-full"
        >
          <CardHeader className="flex items-start justify-center">
            <div
              onClick={() => window.open(project.href, "_blank")}
              className="w-full h-full flex items-center 
            overflow-hidden rounded-lg cursor-pointer"
              title={`App: ${project.title}`}
              aria-label={`App: ${project.title}`}
            >
              <h2 className="text-lg font-semibold hover:underline ml-2">
                {project.title}
                {BadgeConfirm.map((item) => (
                  <>
                    {item.name === project?.status && (
                      <Badge
                        key={item.name}
                        className={`${item.bgColor} ${item.color} ml-2`}
                      >
                        {item.name}
                      </Badge>
                    )}
                  </>
                ))}
              </h2>
            </div>
          </CardHeader>
          <CardContent className="w-full h-full flex flex-col items-center justify-center overflow-hidden gap-y-2">
            <div className="flex flex-col text-justify text-xs">
              {project.description}
            </div>
            <div className="md:flex items-center self-start">
              {project.badge?.map((item) => (
                <Badge
                  key={item.id}
                  className="bg-violet-500 hover:bg-violet-400 transition-all text-xs ml-2 mb-1"
                >
                  {item.label}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </ScrollArea>
  );
};
