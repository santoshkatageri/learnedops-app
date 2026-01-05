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

console.log("📥 Fetching LearnedOps content...");

// Write SSH key
execSync(`
  mkdir -p ~/.ssh
  echo "$GITHUB_DEPLOY_KEY" | base64 --decode > ~/.ssh/id_rsa
  chmod 600 ~/.ssh/id_rsa
  ssh-keyscan github.com >> ~/.ssh/known_hosts
`, { stdio: "inherit", shell: "/bin/bash" });

// Clone repo
execSync(`git clone ${REPO_URL} ${CONTENT_DIR}`, {
    stdio: "inherit",
});

console.log("✔ Content available at ./content");
