"use client";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";

import { Download } from "lucide-react";
import { useDownload } from "@/hooks/use-download";

export const DownloadModal = () => {
  const download = useDownload();

  const downloadResumePT = () => {
    window.open("/download/Portuguese-BR.pdf", "_blank");
  };

  const downloadResumeEN = () => {
    window.open("/download/English.pdf", "_blank");
  };

  return (
    <Dialog open={download.isOpen} onOpenChange={download.onClose}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium">Download Resume</h2>
        </DialogHeader>
        <DialogFooter className="mt-4 flex items-center">
          <Button
            onClick={downloadResumePT}
            variant="superOutline"
            size="sm"
            className="w-full flex items-center justify-between border-emerald-500 
            hover:bg-emerald-200 hover:text-emerald-500 text-xs"
          >
            Download in Portuguese
            <Download className="h-4 w-4" />
          </Button>
          <Button
            onClick={downloadResumeEN}
            variant="superOutline"
            size="sm"
            className="w-full flex items-center justify-between border-emerald-500 
            hover:bg-emerald-200 hover:text-emerald-500 text-xs"
          >
            Download in English
            <Download className="h-4 w-4" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
