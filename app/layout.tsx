import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "Golden Thread WWTP — Wastewater Treatment System Renovation",
  description: "Complete renovation of the wastewater treatment system at Golden Thread Co., Ltd. — 500 m³/day capacity featuring equalization, aeration, sedimentation, and sludge management processes.",
  keywords: ["wastewater treatment", "WWTP", "Golden Thread", "renovation", "500 m³/day", "biological treatment"],
  openGraph: {
    title: "Golden Thread — Wastewater Treatment System Renovation",
    description: "Technical presentation for the 500 m³/day wastewater treatment plant renovation project.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
