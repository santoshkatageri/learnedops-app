import Link from "next/link";
import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "LearnedOps — DevOps Beyond Tools",
    template: "%s | LearnedOps",
  },
  description:
    "LearnedOps is a calm, layered approach to DevOps, engineering careers, and long-term financial thinking — beyond tools and hype.",
  metadataBase: new URL("https://learnedops.app"), // change if domain differs
  openGraph: {
    title: "LearnedOps — DevOps Beyond Tools",
    description:
      "DevOps, careers, and money for engineers — focused on systems thinking, real-world decisions, and long-term clarity.",
    url: "https://learnedops.app",
    siteName: "LearnedOps",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800 antialiased">
        {/* Header */}
        <header className="border-b">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              LearnedOps
            </Link>

            <nav className="space-x-6 text-sm text-gray-600">
              <Link href="/blog" className="hover:text-black">
                Blog
              </Link>
              <Link href="/roadmap" className="hover:text-black">
                Roadmap
              </Link>
              <Link href="/labs" className="hover:text-black">
                Labs
              </Link>
              <Link href="/about" className="hover:text-black">
                About
              </Link>
            </nav>
          </div>
        </header>

        {/* Main */}
        <main className="max-w-4xl mx-auto px-4 py-10">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t mt-20">
          <div className="max-w-4xl mx-auto px-4 py-6 text-sm text-gray-500">
            © {new Date().getFullYear()} LearnedOps — DevOps Beyond Tools
          </div>
        </footer>
      </body>
    </html>
  );
}
