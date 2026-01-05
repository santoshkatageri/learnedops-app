import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.resolve("content/blog");

export type BlogListItem = {
    slug: string;
    title: string;
    summary: string;
    published: string;
};

export function getLatestBlogs(limit = 3): BlogListItem[] {
    const files = fs.readdirSync(BLOG_DIR);

    return files
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => {
            const source = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
            const { data } = matter(source);

            return {
                slug: file.replace(".mdx", ""),
                title: data.title,
                summary: data.summary,
                published: data.published,
            };
        })
        .sort(
            (a, b) =>
                new Date(b.published).getTime() -
                new Date(a.published).getTime()
        )
        .slice(0, limit);
}
