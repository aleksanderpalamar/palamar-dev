"use server";

import { ClerkProvider } from "@clerk/nextjs";
import { Navigation } from "./(dashboard)/_components/navigation";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => { 
  return (
    <ClerkProvider>      
      <div className="h-full flex dark:bg-[#1f1f1f] bg-white">
        <Navigation />
        <main className="flex-1 h-full overflow-y-auto">
          {children}
        </main>
      </div>     
    </ClerkProvider>
  );
};

export default PlatformLayout;
