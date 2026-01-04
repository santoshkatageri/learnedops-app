import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "LearnedOps",
  description:
    "DevOps beyond tools. Finance beyond money. Build systems, build stability.",
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
