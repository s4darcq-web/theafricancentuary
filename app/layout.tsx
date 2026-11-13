import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The African Century | From Promise to Power",
  description:
    "A movement, a book, and a shared conviction that Africa’s greatest chapter is ours to write.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
