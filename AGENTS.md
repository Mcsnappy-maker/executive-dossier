# Safe, lean AI development rules

These instructions apply to any coding agent working in this repository (including Codex, Antigravity, Cursor and tools supporting AGENTS.md). **Before making changes, read `docs/GITHUB_OPERATING_STANDARD.md`, this repository's README, applicable existing agent rules, and relevant project configuration.** Preserve existing project-specific instructions; do not override them casually.

## Production is protected
- Identify the actual production branch, deployment provider and current working branch. Never assume `main` is production.
- No direct push to a production branch, merging, production deploy, force push, destructive cleanup, secret/config change, history rewrite or deletion without explicit, action-specific authorisation.
- For maintenance or cleanup, preserve all current application behaviour. Never remove code, assets, snapshots, migrations or build dependencies merely because they appear unused.
- Prefer a topic branch and draft pull request for review; confirm the branch is not mapped to production before pushing.
- Do not modify third-party cloud settings or data, and never expose credentials, private documents, CVs or environment secrets.

## Develop locally, publish deliberately
- Inspect the branch, worktree, pending changes, package scripts and CI configuration first. Preserve edits you did not create.
- Make a focused plan, edit locally, run appropriate tests, typecheck/lint/build and review the actual diff.
- A test, screenshot, log, retry or prompt is not a reason to commit or push. Commit coherent tested work; normally push once per completed review batch, not per edit.
- Stage reviewed paths only; inspect changed files, generated outputs, binaries and possible secrets before committing.
- Never spam retries on API limits or deployment failures; report the exact error and stop.

## Storage and CI discipline
- Keep runtime source/assets, configuration, lockfiles, required test fixtures, and deliberately versioned baselines.
- Do not commit disposable `node_modules/`, build folders, test outputs, coverage, temporary screenshots/videos/traces, debug logs or caches. Use a carefully reviewed `.gitignore`, not mass file deletion.
- Do not ignore all images: essential website media and test snapshots may be images.
- Existing tracked files and history are unaffected by new ignore entries; history rewrites and file deletions require separate review.
- In CI, prefer failure-only debug artifacts and short justified retention (often 3–7 days); never disable required tests or security checks to save storage.
- Minimise redundant preview builds; avoid repetitive pushes. Respect GitHub API rate-limit instructions.

## Complete the task with evidence
- Before risky operations explain impact, verification, rollback and approval needed.
- Report exact files changed, branch/commit/PR, tests run, deployment/preview status, any remaining issues and explicitly what was not changed.
- If asked for an audit only, do not edit or push. Do not claim live-site safety without verification.

**Full standard:** `docs/GITHUB_OPERATING_STANDARD.md`. Project-specific overrides should be additive and must not weaken production safety.