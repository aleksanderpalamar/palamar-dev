"use client";

import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModal } from "@/hooks/use-modal";

export const AboutModal = () => {
  const { isOpen, onClose, type, data } = useModal()

  const handleClose = () => {
    onClose();    
  };

  return (
    <Dialog open>
      <DialogContent className="bg-white text-zinc-950 p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            About
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            Palamar.Dev
          </DialogDescription>          
        </DialogHeader>        
      </DialogContent>
    </Dialog>
  );
};
