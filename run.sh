#!/usr/bin/env bash
set -e

echo "🧑‍💻 LearnedOps local dev runner"

CONTENT_DIR="content"
CONTENT_REPO="git@github.com:santoshkatageri/learnedops-content.git"

# Step 1: Ensure content exists
if [ ! -d "$CONTENT_DIR/blog" ]; then
  echo "📦 content/blog not found"
  echo "🔄 Cloning learnedops-content repo..."

  if ! command -v git >/dev/null 2>&1; then
    echo "❌ git is not installed"
    exit 1
  fi

  # Attempt clone
  if git clone "$CONTENT_REPO" "$CONTENT_DIR"; then
    echo "✔ Content cloned successfully"
  else
    echo ""
    echo "❌ Failed to clone content repo"
    echo "👉 Make sure SSH access to GitHub is configured:"
    echo "   ssh -T git@github.com"
    echo ""
    exit 1
  fi
else
  echo "✔ Content already present"
fi


# Step 2: Start dev server
echo "🚀 Starting Next.js dev server"
npm run dev
