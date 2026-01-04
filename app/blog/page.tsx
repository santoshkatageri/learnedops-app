import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export default function BlogIndex() {
    const files = fs.readdirSync(BLOG_DIR);

    const posts = files.map((file) => {
        const source = fs.readFileSync(
            path.join(BLOG_DIR, file),
            "utf8"
        );
        const { data } = matter(source);

        return {
            slug: file.replace(".mdx", ""),
            title: data.title,
            date: data.date,
        };
    });

    return (
        <main>
            <h1 className="text-2xl font-bold mb-4">Blog</h1>
            <ul className="space-y-2">
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link
                            href={`/blog/${post.slug}`}
                            className="text-blue-600 underline"
                        >
                            {post.title}
                        </Link>
                        <div className="text-sm text-gray-500">
                            {post.date}
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
}
