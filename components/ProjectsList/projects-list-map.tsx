/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { projects } from "./projects";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
})

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { GithubIcon, Globe } from "lucide-react";

const BadgeConfirm = [
  {
    id: 1,
    name: "Live",
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
    <div className="flex flex-col space-y-4 items-center justify-center">
      <h1 className={cn(
        "text-4xl font-bold text-gray-900 dark:text-gray-50",
        poppins.className
      )}>
        Projetos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.length === 0 && (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-50 text-center font-bold">
              Empty Projects
            </p>
          </div>
        )}
        {projects.map((project) => (
          <div
            key={project.id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl 
            dark:shadow-2xl hover:scale-105 transition-all rounded overflow-hidden"
          >
            <div className="flex flex-col">
              <Dialog>
                <DialogTrigger>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </DialogTrigger>
                <DialogContent className="bg-white text-zinc-950 p-0 overflow-hidden max-w-6xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover animate-fade"
                  />
                </DialogContent>
              </Dialog>
              <div className="flex flex-col p-4 space-y-4">
                <h2 className="flex items-center justify-between">
                  {project.title}
                  <span className="badge badge-secondary">
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
                  </span>
                </h2>
                <p className="text-gray-500 dark:text-gray-50 text-xs truncate">
                  {project.description}
                </p>
                <div className="text-gray-500 dark:text-gray-50 text-xs">
                  {project.technologies?.map((item) => (
                    <Badge
                      key={item.id}
                      className="bg-violet-500/10 hover:bg-violet-500/20 text-violet-500 transition-all text-xs ml-1 mb-1"
                      variant="default"
                      size="sm"
                    >
                      {item.label}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between gap-x-2 items-end mt-4">
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div role="button" className="flex items-center gap-x-2 p-1 border-l-2 border-r-2 border-zinc-700/75 hover:bg-zinc-500/10 text-base">
                      <GithubIcon className="h-5 w-5" />
                      <span>Github</span>
                    </div>
                  </Link>
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div role="button" className="flex items-center gap-x-2 p-1 border-l-2 border-r-2 border-zinc-700/75 hover:bg-zinc-500/10 text-base">
                      <Globe className="h-5 w-5" />
                      <span>Live</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};