import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pragya — Making Learning Visible",
  description: "AI-powered foundational learning intelligence platform. Inspired by ASER DIYA assessment methodology. Assess every child's actual reading and numeracy level, find where learning breaks down, and give teachers immediate actionable plans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-ivory text-charcoal">
        {children}
      </body>
    </html>
  );
}
