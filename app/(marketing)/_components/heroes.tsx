"use client";

import { ProjectsListMap } from "@/components/ProjectsList/projects-list-map";
import { useEffect, useState } from "react";

export const Heroes = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null
  }

  return (
    <div className="max-w-[1280px] flex items-center justify-center mb-14">
      <ProjectsListMap />
    </div>
  )
};
