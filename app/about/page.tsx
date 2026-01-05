export default function AboutPage() {
    return (
        <main className="py-20">
            <div className="mx-auto max-w-5xl px-6">

                {/* Header (not prose) */}
                <header className="max-w-3xl">
                    <h1 className="text-3xl font-semibold tracking-tight text-white">
                        About LearnedOps
                    </h1>
                </header>
                {/* Divider */}
                <hr className="my-12 border-t border-white/20" />

                {/* Content */}
                <article className="prose prose-neutral prose-invert max-w-3xl mt-10">

                    <p>
                        LearnedOps is a calm space for engineers to think clearly about
                        DevOps, careers, and money — beyond tools, trends, and shortcuts.
            </p>

                    <p>
                        The focus here is not on what tools to use, but on how to make
                        better long-term decisions while building systems and careers.
            </p>

                    <blockquote>
                        <p>
                            Better systems come from better decisions, not more tools.
              </p>
                    </blockquote>

                    <p>
                        This site shares real-world perspectives on DevOps beyond hype,
                        engineering growth over time, and financial stability for
                        professionals in tech.
            </p>

                    <p>
                        LearnedOps is maintained by an engineer working with real
                        production systems. It is not a course platform or a consulting
                        pitch — just a long-term thinking space, built in public.
            </p>

                </article>

            </div>
        </main>
    );
}
