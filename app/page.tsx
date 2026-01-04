import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section aria-labelledby="hero-heading" className="py-16">

        <div className="max-w-3xl">
          {/* Editorial content */}
          <div className="prose prose-neutral">
            <h1 id="hero-heading" className="text-4xl font-bold tracking-tight">
              DevOps Beyond Tools
      </h1>

            <h2 className="mt-4 text-xl text-gray-600">
              Finance Beyond Money. Build a Stable Life.
      </h2>

            <p className="mt-6">
              LearnedOps is a calm, layered approach to understanding DevOps,
              careers, and money for engineers.
      </p>

            <p>
              We focus on systems thinking, real-world infrastructure decisions,
              automation trade-offs, and long-term financial clarity — not tool
              chasing.
      </p>
          </div>

          {/* CTAs OUTSIDE prose */}
          <div className="mt-8 flex gap-4">
            <Link
              href="/blog"
              className="inline-block rounded-md bg-brand-primary px-5 py-2 text-sm font-medium text-white hover:opacity-90"
            >
              Read the Blog
      </Link>

            <Link
              href="/roadmap"
              className="inline-block rounded-md border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 hover:border-gray-400"
            >
              Explore the Roadmap
      </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
