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
      {/* What We Focus On */}
      <section
        aria-labelledby="focus-heading"
        className="py-16 border-t border-gray-200"
      >
        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {/* DevOps */}
          <div className="space-y-2">
            <span className="text-sm font-medium uppercase tracking-wide text-[#0097b2]">
              DevOps
            </span>
            <h3 className="text-lg font-semibold">
              Beyond Tools
            </h3>
            <hr className="my-5 border-[#0097b2]/20" />
            <p className="text-gray-600">
              Systems thinking, infrastructure decisions, reliability, cost trade-offs,
              and real-world DevOps lessons — not tool-chasing tutorials.
            </p>
          </div>
          {/* Career */}
          <div className="space-y-2">
            <span className="text-sm font-medium uppercase tracking-wide text-[#0097b2]">
              Career
            </span>
            <h3 className="text-lg font-semibold">
              Clear Engineering Growth
            </h3>
            <hr className="my-5 border-[#0097b2]/20" />
            <p className="text-gray-600">
              Guidance for engineers navigating IC growth, skill prioritization,
              resumes, interviews, and avoiding long-term stagnation.
            </p>
          </div>

          {/* Finance */}
          <div className="space-y-2">
            <span className="text-sm font-medium uppercase tracking-wide text-[#0097b2]">
              Finance
            </span>
            <h3 className="text-lg font-semibold">
              Money Without Noise
            </h3>
            <hr className="my-5 border-[#0097b2]/20" />
            <p className="text-gray-600">
              Salary vs wealth, FIRE basics, RSUs, EPF, NPS, and long-term financial
              clarity — explained calmly for engineers.
            </p>
          </div>

          {/* Roadmaps */}
          <div className="space-y-2">
            <span className="text-sm font-medium uppercase tracking-wide text-[#0097b2]">
              Practice
            </span>
            <h3 className="text-lg font-semibold">
              Roadmaps & Labs
            </h3>
            <hr className="my-5 border-[#0097b2]/20" />
            <p className="text-gray-600">
              Layered learning paths, real scenarios, and hands-on labs — evolving into
              deeper workflows with LevelUpOps.
            </p>
          </div>
        </div>

      </section>

    </main>
  );
}
