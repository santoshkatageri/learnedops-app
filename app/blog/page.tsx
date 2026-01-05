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
        <main className="py-20">
            <div className="max-w-5xl mx-auto px-4">
                {/* Page header */}
                <header className="max-w-3xl">
                    <h1 className="text-3xl font-semibold tracking-tight text-[#0097b2]">
                        LearnedOps Insights
                    </h1>

                    <p className="mt-4 text-gray-600">
                        Perspectives on DevOps beyond tools, engineering careers, and
                        long-term systems thinking — grounded in real-world experience.
                    </p>
                </header>

                {/* Divider */}
                <hr className="my-10 border-gray-200" />

                {/* Posts */}
                <section className="space-y-14">
                    {posts.map((post) => (
                        <article key={post.slug}>
                            <h2 className="text-xl font-semibold">
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="text-[#0097b2] hover:underline"
                                >
                                    {post.title}
                                </Link>
                            </h2>

                            <p className="mt-3 max-w-3xl text-gray-600">
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
