"use client";

import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full antialiased">
      <Navbar />
      <main className="h-full">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
