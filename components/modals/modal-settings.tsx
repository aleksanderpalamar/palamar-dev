"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label";
import { useSettings } from "@/hooks/use-settings";

export const SettingsModal = () => {
  const settings = useSettings();

  return (
    <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium">
            Settings
          </h2>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-y-1">
              <Label>Appearance</Label>
              <span>
                Customize how the app looks on your device.
              </span>
            </div>
            
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
