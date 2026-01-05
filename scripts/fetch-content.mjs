import { execSync } from "child_process";
import fs from "fs";

const CONTENT_DIR = "content";
const REPO_URL = "git@github.com:santoshkatageri/learnedops-content.git";

if (fs.existsSync(CONTENT_DIR)) {
    console.log("✔ Content already present. Skipping fetch.");
    process.exit(0);
}

console.log("📥 Fetching LearnedOps content...");

// If deploy key exists (CI / Vercel), load it
if (process.env.GITHUB_DEPLOY_KEY) {
    console.log("🔐 Using deploy key for GitHub access");

    const KEY_PATH = "/tmp/learnedops_deploy_key";

    fs.writeFileSync(
        KEY_PATH,
        process.env.GITHUB_DEPLOY_KEY.replace(/\\n/g, "\n"),
        { mode: 0o600 }
    );

    execSync(
        `
    eval "$(ssh-agent -s)"
    ssh-add ${KEY_PATH}
    git clone ${REPO_URL} ${CONTENT_DIR}
    `,
        { stdio: "inherit", shell: "/bin/bash" }
    );
} else {
    // Local dev path (uses existing ssh-agent)
    console.log("🔓 Using local SSH agent");
    execSync(`git clone ${REPO_URL} ${CONTENT_DIR}`, { stdio: "inherit" });
}

console.log("✔ Content available at ./content");
