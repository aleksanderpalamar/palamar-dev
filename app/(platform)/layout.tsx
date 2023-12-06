"use server";

import { ClerkProvider } from "@clerk/nextjs";
import { Navigation } from "./(dashboard)/_components/navigation";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => { 
  return (
    <ClerkProvider>    
      {children}    
    </ClerkProvider>
  );
};

export default PlatformLayout;
