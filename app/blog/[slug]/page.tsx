import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

/**
 * Force dynamic rendering (safe for dev & prod)
 */
export const dynamic = "force-dynamic";

const BLOG_DIR = path.resolve("content/blog");

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
        <article className="prose prose-neutral prose-lg max-w-none leading-relaxed">
            <h1>{data.title}</h1>
            <p className="text-sm text-gray-500">{data.date}</p>

            <MDXRemote source={content} />
        </article>
    );
}
