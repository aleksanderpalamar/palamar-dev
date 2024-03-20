import "./globals.css";

import { ClerkProvider } from "@clerk/clerk-react";
import { ErrorBoundary } from "react-error-boundary";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ModalProvider } from "@/components/providers/modal-provider";
import ErrorFallback from "./error";
import { siteConfig } from "@/config/site";

import { Toaster } from "sonner";
import { LanguageProvider } from "@/context/language-context";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: {
    index: true,
    follow: true,
  },
  images: [
    {
      url: siteConfig.title,
      alt: siteConfig.title,
      width: 800,
      height: 600,
    },
  ],
  icons: siteConfig.icons,
  alternates: siteConfig.alternates,
  openGraph: siteConfig.openGraph,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
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
          "text-zinc-950 bg-[#1f1f1f] dark:text-white"
        )}
      >
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
            storageKey="PalamarDevTheme"
          >
            <Toaster position="bottom-center" />
            <ModalProvider />
            <LanguageProvider>
              {children}
            </LanguageProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
