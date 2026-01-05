import { execSync } from "child_process";
import fs from "fs";

const CONTENT_DIR = "content";
const REPO = "santoshkatageri/learnedops-content";

if (fs.existsSync(CONTENT_DIR)) {
    console.log("✔ Content already present. Skipping fetch.");
    process.exit(0);
}

if (!process.env.GITHUB_CONTENT_TOKEN) {
    console.error("❌ GITHUB_CONTENT_TOKEN not set");
    process.exit(1);
}

const repoUrl = `https://${process.env.GITHUB_CONTENT_TOKEN}@github.com/${REPO}.git`;

console.log("📥 Fetching LearnedOps content via HTTPS...");
execSync(`git clone ${repoUrl} ${CONTENT_DIR}`, {
    stdio: "inherit",
});

console.log("✔ Content available at ./content");
