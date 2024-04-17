import { create } from "zustand";

type ContactProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useContact = create<ContactProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))