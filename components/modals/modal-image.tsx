/* eslint-disable @next/next/no-img-element */
"use client";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useImage } from "@/hooks/use-image";
import { projects } from "../ProjectsList/projects";

export const ModalImage = () => {
  const image = useImage();

  return (
    <Dialog open={image.isOpen} onOpenChange={image.onClose}>
      <DialogContent>
        <DialogHeader>
          {projects.map((project) => (
            <>
              {project.image && (
                <div
                  key={project.id}
                  className="w-full h-full flex items-center justify-center"
                >
                  <img
                    src={project.image[0]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </>
          ))}                    
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
