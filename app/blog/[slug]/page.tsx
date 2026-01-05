import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import { Callout, Note, Quote } from "@/components/mdx";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

type ChangelogEntry = {
    version: string;
    date: string;
    changes: string[];
};

type BlogFrontmatter = {
    title: string;
    slug?: string;
    summary?: string;
    status?: string;
    version?: string;
    published?: string;
    updated?: string;
    tags?: string[];
    changelog?: ChangelogEntry[];
};

/* -------------------------------------------------------------------------- */
/*                               CONFIGURATION                                */
/* -------------------------------------------------------------------------- */

/**
 * Force dynamic rendering (safe for dev & prod)
 */
export const dynamic = "force-dynamic";

const BLOG_DIR = path.resolve("content/blog");

/* -------------------------------------------------------------------------- */
/*                               SEO METADATA                                 */
/* -------------------------------------------------------------------------- */

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        return {};
    }

    const source = fs.readFileSync(filePath, "utf8");
    const { data } = matter(source);
    const frontmatter = data as BlogFrontmatter;

    return {
        title: frontmatter.title,
        description: frontmatter.summary,
        openGraph: {
            title: frontmatter.title,
            description: frontmatter.summary,
            type: "article",
        },
    };
}

/* -------------------------------------------------------------------------- */
/*                                 PAGE VIEW                                  */
/* -------------------------------------------------------------------------- */

export default async function BlogPost({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) notFound();

    const source = fs.readFileSync(filePath, "utf8");
    const { content, data } = matter(source);
    const frontmatter = data as BlogFrontmatter;

    return (
        <main className="py-12">
            <article className="mx-auto max-w-5xl px-6">

                {/* ------------------------------------------------------------------ */}
                {/* Header                                                             */}
                {/* ------------------------------------------------------------------ */}

                <header className="mb-8">
                    <h1 className="text-4xl font-semibold tracking-tight">
                        {frontmatter.title}
                    </h1>

                    {frontmatter.summary && (
                        <p className="mt-3 text-lg text-gray-500 max-w-4xl">
                            {frontmatter.summary}
                        </p>
                    )}

                    <div className="mt-3 text-sm text-gray-400 flex flex-wrap gap-x-3">
                        {frontmatter.published && <span>{frontmatter.published}</span>}
                        {frontmatter.version && <span>• v{frontmatter.version}</span>}
                        {frontmatter.updated && (
                            <span>• Updated {frontmatter.updated}</span>
                        )}
                        {frontmatter.status && <span>• {frontmatter.status}</span>}
                    </div>
                </header>

                {/* ------------------------------------------------------------------ */}
                {/* Content                                                            */}
                {/* ------------------------------------------------------------------ */}

                <div className="max-w-4xl">
                    <div className="prose prose-neutral prose-lg">
                        <MDXRemote
                            source={content}
                            components={{ Callout, Note, Quote }}
                        />
                    </div>
                </div>

                {/* ------------------------------------------------------------------ */}
                {/* Changelog                                                          */}
                {/* ------------------------------------------------------------------ */}

                {frontmatter.changelog && frontmatter.changelog.length > 0 && (
                    <section className="mt-16 border-t pt-8">
                        <h2 className="text-lg font-semibold mb-4">Changelog</h2>
                        <ul className="space-y-4 text-sm text-gray-600">
                            {frontmatter.changelog.map((entry) => (
                                <li key={entry.version}>
                                    <div className="font-medium">
                                        v{entry.version} · {entry.date}
                                    </div>
                                    <ul className="list-disc ml-5 mt-2">
                                        {entry.changes.map((change, index) => (
                                            <li key={index}>{change}</li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

            </article>
        </main>
    );
}
