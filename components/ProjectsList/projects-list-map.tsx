/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { projects } from "./projects";
import Link from "next/link";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <div
          key={project.id}
          className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all rounded overflow-hidden">
            <div className="flex flex-col">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
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
                <p className="text-gray-500 dark:text-gray-50 text-xs truncate">{project.description}</p>
                <div className="flex justify-between gap-x-2 items-end mt-4">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" size="sm">Visit Repo</Button>
                  </Link>
                  <Link href={project.href} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="sm">Visit Site</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
      ))}         
    </div>
  );
};
