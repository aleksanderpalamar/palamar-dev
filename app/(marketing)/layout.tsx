"use client";

import Header from "./_components/header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full antialiased">
      <Header />
      <main className="h-full w-full">{children}</main>
    </div>
  );
};

export default MainLayout;
