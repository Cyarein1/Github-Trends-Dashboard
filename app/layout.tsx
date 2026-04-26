import type { Metadata } from "next";
import EmotionCacheRegistry from "./emotion-cache-registry";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitHub Trends Dashboard",
  description: "A dashboard for exploring trending GitHub repository signals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <EmotionCacheRegistry>{children}</EmotionCacheRegistry>
      </body>
    </html>
  );
}
