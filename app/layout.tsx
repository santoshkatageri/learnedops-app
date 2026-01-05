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
  metadataBase: new URL("https://learnedops.com"), // change if domain differs
  openGraph: {
    title: "LearnedOps — DevOps Beyond Tools",
    description:
      "DevOps, careers, and money for engineers — focused on systems thinking, real-world decisions, and long-term clarity.",
    url: "https://learnedops.com",
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
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
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
        <main className="max-w-5xl mx-auto px-4 py-10">
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-32 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
              {/* Brand */}
              <div>
                <p className="text-lg font-semibold">
                  LearnedOps
                </p>
                <p className="mt-2 max-w-sm text-sm text-gray-600">
                  DevOps beyond tools. Finance beyond money.
                  Building calm, durable systems — in tech and life.
                </p>
              </div>

              {/* Links */}
              <div className="flex gap-12">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Blog
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-gray-600">
                    <li>
                      <a href="/blog" className="hover:underline">
                        LearnedOps Insights
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-900">
                    About
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-gray-600">
                    <li>
                      <a href="/about" className="hover:underline">
                        About LearnedOps
                      </a>
                    </li>
                    <li>
                      <a href="/contact" className="hover:underline">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a href="/disclaimer" className="hover:underline">
                        Disclaimer
                      </a>
                    </li>

                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom line */}
            <div className="mt-12 text-sm text-gray-500">
              © {new Date().getFullYear()} LearnedOps. All rights reserved.
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
