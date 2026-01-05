import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type PostMeta = {
    title: string;
    slug: string;
    summary: string;

    published: string;
    updated?: string;

    status?: "draft" | "stable";
    version?: string;

    tags?: string[];

    changelog?: {
        version: string;
        date: string;
        changes: string[];
    }[];
};

export function getAllPosts(): PostMeta[] {
    const files = fs.readdirSync(postsDirectory);

    return files
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => {
            const slug = file.replace(/\.mdx$/, "");
            const filePath = path.join(postsDirectory, file);
            const fileContents = fs.readFileSync(filePath, "utf8");

            const { data } = matter(fileContents);

            return {
                slug,
                title: data.title ?? slug,
                summary: data.summary ?? "",
                published: data.published ?? "",
                updated: data.updated,
                status: data.status,
                version: data.version,
                tags: data.tags ?? [],
                changelog: data.changelog ?? [],
            };
        })
        .filter((post) => post.status !== "draft") // 👈 important
        .sort((a, b) =>
            new Date(b.published).getTime() -
            new Date(a.published).getTime()
        );
}
