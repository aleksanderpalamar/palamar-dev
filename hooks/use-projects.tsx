import { create } from "zustand";

type ProjectProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useProject = create<ProjectProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))