import { create } from "zustand";

type ImageProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useImage = create<ImageProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))