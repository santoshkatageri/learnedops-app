import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { getAllPosts } from "../lib/posts"; // adjust path if needed

export const metadata = {
    title: "LearnedOps Insights",
    description:
        "Perspectives on DevOps beyond tools, engineering careers, and long-term systems thinking — grounded in real-world experience.",
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <main className="py-16">
            <div className="mx-auto max-w-5xl px-6">

                {/* Page header */}
                <header className="max-w-3xl">
                    <h1 className="text-3xl font-semibold tracking-tight text-[#ffffff]">
                        LearnedOps Insights
                    </h1>

                    <p className="mt-5 text-gray-600 leading-relaxed">
                        Perspectives on DevOps beyond tools, engineering careers, and
                        long-term systems thinking — grounded in real-world experience.
                    </p>
                </header>

                {/* Divider */}
                <hr className="my-12 border-gray-200" />

                {/* Posts */}
                <section className="space-y-16">
                    {posts.map((post) => (
                        <article
                            key={post.slug}
                            className="max-w-5xl"
                        >
                            <h2 className="text-xl font-semibold leading-snug">
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="text-[#0097b2] hover:underline underline-offset-4"
                                >
                                    {post.title}
                                </Link>
                            </h2>

                            <p className="mt-4 text-gray-600 leading-relaxed">
                                {post.summary}
                            </p>

                            <p className="mt-3 text-sm text-gray-400">
                                {post.updated ?? post.published}
                            </p>
                        </article>
                    ))}
                </section>

            </div>
        </main>

    );
}
