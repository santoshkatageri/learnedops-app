import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type PostMeta = {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
};

export function getAllPosts(): PostMeta[] {
    const files = fs.readdirSync(postsDirectory);

    const posts = files
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => {
            const slug = file.replace(/\.mdx$/, "");
            const filePath = path.join(postsDirectory, file);
            const fileContents = fs.readFileSync(filePath, "utf8");

            const { data } = matter(fileContents);

            return {
                slug,
                title: data.title ?? slug,
                excerpt: data.excerpt ?? "",
                date: data.date ?? "",
            };
        })
        .sort((a, b) => (a.date < b.date ? 1 : -1));

    return posts;
}
