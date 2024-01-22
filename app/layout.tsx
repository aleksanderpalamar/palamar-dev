import "./globals.css";

import { ErrorBoundary } from "react-error-boundary";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ModalProvider } from "@/components/providers/modal-provider";
import ErrorFallback from "./error";
import { siteConfig } from "@/config/site";

import { Toaster } from "sonner";
import { LanguageProvider } from "@/context/translate-context";

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
  robots: {
    index: true,
    follow: true,
  },
  icons: [
    {
      url: "/images/favicon.png",
      type: "image/png",
      sizes: "32x32",
      href: "/images/favicon.png",
    },
  ],
  keywords: [
    "Palamar.Dev",
    "Dev Frontend",
    "Dev Backend",
    "Dev Fullstack",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "TailwindCSS",
  ],
  authors: [{ name: "Aleksander Palamar", url: "https://aleksanderpalamar.dev" }],
  creator: "Aleksander Palamar",
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
          "bg-white text-zinc-950 dark:bg-dark:bg-gray-950 dark:text-white"
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
            <LanguageProvider>{children}</LanguageProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
