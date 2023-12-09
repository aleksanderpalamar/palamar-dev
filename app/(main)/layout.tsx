"use client";

import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { Navigation } from "./_components/navigation";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  switch (true) {
    case isLoading:
      return (
        <div className="h-full flex items-center justify-center dark:bg-[#1f1f1f]">
          <p className="text-2xl font-bold text-zinc-500 animate-pulse dark:text-zinc-400">Loading...</p>
        </div>
      );

      case !isAuthenticated:
        return redirect("/");
  }
  
  return (
    <>
      <div className="h-full flex dark:bg-[#1f1f1f]">
        <Navigation />
        <main className="flex-1 h-full overflow-y-auto">
          {children}
        </main>
      </div>
    </>
  );
};

export default MainLayout;
