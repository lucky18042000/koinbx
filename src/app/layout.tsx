import './globals.css'
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "KoinBX Dashboard",
  description: "Real-time Dashboard with Firebase",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* ThemeProvider is a Context for the pages and components for all the childers */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}