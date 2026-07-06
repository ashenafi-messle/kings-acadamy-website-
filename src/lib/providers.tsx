"use client";

import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/src/lib/i18n";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme="light">
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}

export default Providers;
