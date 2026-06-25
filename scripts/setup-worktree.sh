#!/usr/bin/env bash
# Set up a freshly-created git worktree for local dev.
# Run from inside the new worktree: ./scripts/setup-worktree.sh
set -euo pipefail

# Trust this worktree's mise.toml — trust is keyed by absolute path, so each
# new worktree is untrusted until you trust it.
mise trust

# Ensure the pinned toolchain (node + bun from mise.toml) is installed.
mise install

# Install dependencies — node_modules/ is gitignored, so it's absent in new worktrees.
bun install

echo "✓ Worktree ready — run 'bun dev' to start."
