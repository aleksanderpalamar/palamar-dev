import "./globals.css";

import { ErrorBoundary } from "react-error-boundary";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ModalProvider } from "@/components/providers/modal-provider";
import ErrorFallback from "./error";
import { siteConfig } from "@/config/site";

import { EdgeStoreProvider } from "@/lib/edgestore";
import { Toaster } from "sonner";
import { ConvexClientProvider } from "@/components/providers/convex-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/favicon.ico",
      type: "image/x-icon",
      sizes: "32x32",
      href: "/favicon.ico",
    },
  ],
  keywords: [
    "Palamar.Dev",
    "Palamar",
    "Dev",
    "Open Source",
    "Next.js",
    "React",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          poppins.className,
          "bg-white text-zinc-950 dark:bg-dark:bg-[#313338] dark:text-white"
        )}
      >
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <ConvexClientProvider>
            <EdgeStoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              storageKey="PalamarDevTheme"
            >
              <Toaster position="bottom-right" />
              <ModalProvider />
              {children}
            </ThemeProvider>
            </EdgeStoreProvider>            
          </ConvexClientProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
