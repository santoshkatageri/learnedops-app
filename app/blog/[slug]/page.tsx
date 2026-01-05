import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import { Callout, Note, Quote } from "@/components/mdx";



/**
 * Force dynamic rendering (safe for dev & prod)
 */
export const dynamic = "force-dynamic";

const BLOG_DIR = path.resolve("content/blog");

/* 🔹 SEO METADATA */
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

    return {
        title: data.title,
        description: data.excerpt,
        openGraph: {
            title: data.title,
            description: data.excerpt,
            type: "article",
        },
    };
}

/* 🔹 PAGE RENDER */
export default async function BlogPost({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        notFound();
    }

    const source = fs.readFileSync(filePath, "utf8");
    const { content, data } = matter(source);

    return (
        <main className="py-20">
            <article className="mx-auto max-w-[80ch] px-6">

                {/* Meta */}
                <header className="mb-16">
                    <h1 className="text-4xl font-semibold tracking-tight">
                        {data.title}
                    </h1>

                    <p className="mt-4 text-sm text-gray-400">
                        {data.date}
                    </p>
                </header>

                {/* Content */}
                <div className="prose prose-invert prose-lg leading-relaxed">
                    <MDXRemote source={content}
                        components={{
                            Callout,
                            Note,
                            Quote,
                        }} />
                </div>

            </article>
        </main>
    );

}
