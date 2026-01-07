export default function Page() {
  return (
    <main className="py-12">
      {/* Page container */}
      <div className="mx-auto max-w-5xl px-6">
        {/* Header (NOT prose) */}
        <header className="max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight">
            DevOps Roadmap
          </h1>

          <blockquote className="mt-6 border-l-4 border-brand-primary pl-4 text-neutral-400">
            <p className="space-y-1">
              <strong>DevOps is not a role.</strong>
              <br />
              <strong>DevOps is not a toolchain.</strong>
              <br />
              <strong>
                DevOps is a system of feedback and responsibility.
              </strong>
            </p>
          </blockquote>
        </header>

        {/* Divider */}
        <hr className="my-12 border-t border-gray-300 dark:border-white/30" />

        {/* Content (THIS is where prose belongs) */}
        <article className="prose prose-neutral prose-invert max-w-3xl">
          <p>
            This roadmap is designed to explain DevOps as it is practiced in
            real systems — not as a checklist of tools or certifications.
          </p>

          <h2>How to Read This Roadmap</h2>

          <ul>
            <li>
              <strong>One roadmap for all experience levels.</strong> What
              changes with experience is responsibility, not the roadmap.
            </li>
            <li>
              <strong>Layers are not levels.</strong> You don’t finish layers —
              you revisit them as systems evolve.
            </li>
            <li>
              <strong>Use the experience lens.</strong> Each layer explains
              what’s expected at Beginner, Intermediate, and Senior stages.
            </li>
            <li>
              <strong>Labs matter more than reading.</strong> DevOps is learned
              by building, breaking, and fixing systems.
            </li>
            <li>
              <strong>AI supports learning, not decisions.</strong> AI
              accelerates understanding. Humans own outcomes.
            </li>
          </ul>

          <p>
            <strong>How to start:</strong> Click a layer → read your experience
            lens → try the lab → move forward, and come back often.
          </p>

          <blockquote>
            <p>DevOps is about learning faster — without breaking trust.</p>
          </blockquote>

          <hr />

          <p className="text-sm text-neutral-400">
            The interactive roadmap is currently being built.
          </p>
        </article>
      </div>
    </main>
  );
}
