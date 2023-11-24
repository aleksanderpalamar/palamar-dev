"use client";

import { Suspense, useState } from "react";
import Loading from "./loading";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../error";
import { MobileToggle } from "@/components/mobile-toggle";
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
