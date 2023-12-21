import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { Sidebar } from "./sidebar";


export const MobileToggle = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-transparent text-violet-500 hover:text-violet-500 dark:text-zinc-50"
        >
          <Button size="sm" variant="ghost" className="flex items-center gap-x-2 
          hover:bg-violet-500/10 rounded hover:text-violet-500 dark:hover:bg-zinc-500/10 hover:dark:text-zinc-50">
            <MenuIcon className="w-5 h-5" />
          </Button>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 flex gap-0">
        <div className="w-full">
          <Sidebar href="" />          
        </div>        
      </SheetContent>
    </Sheet>
  );
};
