export default function LabsPage() {
  return (
    <main className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <header className="max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight">
            LearnedOps Labs
          </h1>

          <p className="mt-4 text-gray-400 text-lg">
            Learning DevOps by building, breaking, and fixing systems — not by
            memorizing tools.
          </p>
        </header>

        {/* Divider */}
        <hr className="my-12 border-t border-gray-300 dark:border-white/30" />

        <article className="prose prose-neutral prose-invert max-w-3xl mt-10">
          <p>
            Labs on LearnedOps are not tutorials. They are guided system
            experiments designed to help engineers develop judgment under
            realistic constraints.
          </p>

          <p>
            Real DevOps work rarely comes with perfect information, clean
            failures, or step-by-step instructions. Labs reflect that reality.
          </p>

          <blockquote>
            <p>
              If a lab feels slightly uncomfortable, it’s probably doing its
              job.
            </p>
          </blockquote>

          <h2>What Labs Focus On</h2>

          <ul>
            <li>Understanding failure modes before tools</li>
            <li>Reducing risk during change</li>
            <li>Shortening feedback loops</li>
            <li>Making trade-offs explicit</li>
          </ul>

          <h2>How Labs Fit the Roadmap</h2>

          <p>
            Each roadmap layer will be supported by labs that reinforce its
            ideas. Reading explains <em>why</em>. Labs teach{" "}
            <em>when and how</em>.
          </p>

          <p>
            Labs will be released incrementally, starting with core system
            behaviors like deployment feedback, observability, and incident
            response.
          </p>

          <p className="text-sm text-neutral-400">
            Labs are currently in design and will be released gradually.
          </p>
        </article>
      </div>
    </main>
  );
}
