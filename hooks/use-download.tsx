import { create } from "zustand";

type DownloadProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useDownload = create<DownloadProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))