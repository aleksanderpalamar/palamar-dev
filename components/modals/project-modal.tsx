"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog"
import { useProject } from "@/hooks/use-projects"
import { ProjectsListMap } from "../ProjectsList/projects-list-map";

export const ProjectModal = () => {
  const project = useProject();

  return (
    <Dialog open={project.isOpen} onOpenChange={project.onClose}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium">
            Projects
          </h2>          
        </DialogHeader>
        <ProjectsListMap />        
      </DialogContent>
    </Dialog>
  )
}