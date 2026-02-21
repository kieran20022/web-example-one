import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web Example One",
  description: "Example website for company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
