import { execSync } from "child_process";
import fs from "fs";

const CONTENT_DIR = "content";
const REPO_URL = "git@github.com:santoshkatageri/learnedops-content.git";

if (fs.existsSync(CONTENT_DIR)) {
    console.log("✔ Content already present. Skipping fetch.");
    process.exit(0);
}

console.log("📥 Fetching LearnedOps content...");
execSync(`git clone ${REPO_URL} ${CONTENT_DIR}`, { stdio: "inherit" });

console.log("✔ Content available at ./content");
