import { execSync } from "child_process";
import fs from "fs";

const CONTENT_DIR = "content";
const REPO_URL = "git@github.com:santoshkatageri/learnedops-content.git";

if (fs.existsSync(CONTENT_DIR)) {
    console.log("✔ Content already present. Skipping fetch.");
    process.exit(0);
}

if (!process.env.GITHUB_DEPLOY_KEY) {
    console.error("❌ GITHUB_DEPLOY_KEY not set");
    process.exit(1);
}

console.log("🔐 Setting up SSH environment...");

// Ensure ssh directory
execSync("mkdir -p ~/.ssh");

// Write private key
execSync(
    `echo "$GITHUB_DEPLOY_KEY" | base64 --decode > ~/.ssh/id_ed25519`
);

// Permissions REQUIRED or SSH refuses key
execSync("chmod 600 ~/.ssh/id_ed25519");

// Explicitly trust GitHub host (THIS FIXES YOUR ERROR)
execSync("ssh-keyscan -t ed25519 github.com >> ~/.ssh/known_hosts");

console.log("📥 Fetching LearnedOps content...");
execSync(`git clone ${REPO_URL} ${CONTENT_DIR}`, {
    stdio: "inherit",
});

console.log("✔ Content available at ./content");
