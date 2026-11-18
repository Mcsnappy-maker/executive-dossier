# GitHub Operating Standard for AI-assisted development

## Workflow: inspect -> plan -> edit locally -> test -> review diff -> commit -> push for PR -> verify -> approve

1. **Inspect.** Check `git status`, branch and commit; current production deployment mapping; README, package scripts, existing agent instructions, CI workflows, protected resources and open work.
2. **Plan.** Identify exact files, risks, tests and rollback route. Get separate approval for production or destructive work.
3. **Work locally.** Edit on a short-lived topic branch. Use local temp storage for screenshots, Playwright runs, logs, recordings and experiments. Do not commit/push to run tests that are available locally.
4. **Test proportionately.** Targeted tests first, then relevant lint, typecheck, build, browser/accessibility/regression checks. Do not run expensive identical checks unnecessarily.
5. **Inspect staged diff.** Use `git status --short`, `git diff --check`, staged file list and diff. Check for secrets, generated files, huge binaries or unrelated changes.
6. **Commit intentionally.** Meaningful completed milestones; local commits are fine. A local commit is NOT a GitHub push, and GitHub does not have a simple universal daily commit allowance.
7. **Push for review.** Usually one push for a coherent reviewed batch. Use a draft PR and a preview environment where available; verify it is not a production deploy.
8. **Release only with approval.** Verify checks, responsive routes and critical user flows. Never merge or deploy without explicit permission; smoke-test after any authorised release.

## What to keep and where

| Material | Default |
| --- | --- |
| Source, lockfiles, migrations, config, essential public assets | Track in Git |
| Required visual regression snapshots and test fixtures | Track if the test suite relies on them |
| Temporary screenshots, traces, recordings, debug logs, coverage, build output, caches | Keep local or ephemeral CI artifact; do not commit |
| Secrets and personal data | Use secure storage; only safe `.env.example` templates may be tracked |
| Essential large assets | Evaluate CDN or Git LFS intentionally; LFS has separate cost and usage |

Never delete or ignore all PNG/JPEG/WebP files. Check references, public URLs, tests, build and deployment usage first. `.gitignore` does not untrack existing files; deleting tracked files does not erase Git history.

## CI and cost controls
- Prefer targeted triggers. Cancel obsolete **non-production** workflow runs only after confirming it cannot interfere with required checks.
- Use upload-on-failure for traces/screenshots where appropriate. Suggested artifact retention: 3–7 days if investigations and compliance requirements allow.
- Never disable mandatory checks, deployment safeguards, security scanning or backups to reduce cost.
- Track repository size, Actions artifacts, LFS, workflow minutes, deployment count and failed jobs separately.
- For throttling, capture the exact service and error (GitHub API, Actions, Codex, Claude, Vercel, etc.); distinguish API rate limits from credits and CI or storage quotas. Don't hammer retries.

## Change risk and rollback
- **Green:** inspect/read and report; no edits.
- **Amber:** instruction files, narrowly reviewed ignore rules or workflow tuning on a review branch; confirm tests and dependency checks.
- **Red:** file removal with unclear impact, history rewrite, branch/repo/tag deletion, production settings, secrets, authentication, database, migrations and production deployments. Require action-specific permission and a rollback plan.

## Verification checklist
- [ ] Correct current branch and original commit recorded
- [ ] Existing agent rules preserved
- [ ] Only intended files changed; no secrets
- [ ] Relevant tests verified or limitations stated
- [ ] PR/preview reviewed, production branch and settings unchanged
- [ ] Number of commits, remote pushes, CI/deploy outcomes and storage impact reported

References: [GitHub repository limits](https://docs.github.com/en/repositories/creating-and-managing-repositories/repository-limits) · [API rate limits](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api) · [GitHub Actions artifacts](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/remove-workflow-artifacts) · [Copilot instructions](https://docs.github.com/en/copilot/concepts/prompting-and-context/custom-instructions) · [Vercel Git deployments](https://vercel.com/docs/git).