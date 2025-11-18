import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stefano Taillefert",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased scroll-smooth`}>
        <nav className="sticky top-0 z-50 bg-black bg-opacity-90 backdrop-blur-md border-b border-gray-800">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/#home" className="text-2xl! font-bold! text-blue-400!">
              ST
            </Link>

            <div className="hidden md:flex gap-8">
              <Link href="/#about">About</Link>
              <Link href="/#projects">Projects</Link>
              <Link href="/#contact">Contact</Link>
            </div>

            <div className="md:hidden flex gap-4">
              <Link href="/#about">About</Link>
              <Link href="/#projects">Projects</Link>
              <Link href="/#contact">Contact</Link>
            </div>
          </div>
        </nav>

        <main className="w-full">{children}</main>

        <footer className="py-8 px-4 border-t border-gray-800 text-center text-gray-500">
          <p>&copy;2025 Stefano Taillefert</p>
        </footer>
      </body>
    </html>
  );
}
