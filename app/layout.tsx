import { ThemeProvider } from "../components/Theme-provider";
import type { Metadata } from "next";
import { Teachers } from "next/font/google";
import "./globals.css";

const teachers = Teachers({
  variable: "--font-teachers",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gatsby — Prioritize Reading",
  description: "Rank books to read later.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${teachers.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
