# Mark O'Hare Executive Dossier

The live personal leadership dossier is deployed at
[executive-dossier-kohl.vercel.app](https://executive-dossier-kohl.vercel.app/#top).

This README is the handover record for Antigravity and future contributors. Read it
before making design or content changes.

## Guardrails

- Preserve the existing visible copy, meaning, case-study claims and functionality unless
  the site owner specifically asks to change them.
- The site may be visually evolved, but it is **not** a Kelloch-branded site. Do not
  introduce Kelloch colours, logos or its visual identity.
- Keep the restrained editorial design language; avoid generic gradients, excessive
  decoration, new badges and heavy card/shadow treatments.
- Prefer small shared-component or token-level changes over page-specific overrides.
- Do not deploy changes to production without the owner's explicit approval.

## Current implemented state (22 November 2026)

### CV access

Both CV formats are intentionally available in the main points of entry:

| Location | Concise CV | Detailed CV |
| --- | --- | --- |
| Desktop header | `CV PDF` | `Detailed CV` |
| Mobile navigation | `CV PDF` | `Detailed CV` |
| Hero contact area | `Download CV (PDF)` | `Download detailed CV (Word)` |
| Footer | `Download CV (PDF)` | `Detailed CV (Word)` |

Do not remove either download without explicit approval. Their canonical assets are:

- `/public/Mark_OHare_Leadership_CV_2026.pdf`
- `/public/Mark_OHare_CV_2026_V1.docx`

### Research evidence

The featured CERT case study includes a compact **Research evidence** block. It links to
the [REALITIES Asset Hubs paper](https://measuringhumanity.org/wp-content/uploads/2023/12/Reframing-REALITIES-asset-hubs.pdf), which lists Mark O'Hare as a co-investigator for
pre-employability in Clackmannanshire and discusses CERT / Positive Moves in the
Clackmannanshire material.

The implemented on-page wording is deliberately factual and restrained. Do not expand
or rewrite it without checking the primary paper and receiving content approval.

### Recent production release

- Pull request [#6](https://github.com/Mcsnappy-maker/executive-dossier/pull/6),
  **Expose detailed CV and CERT research evidence**, was squash-merged to `main`.
- Production commit: `6a0c1daccd1a36d34efdf5260e154901474acf06`.
- Vercel deployment completed successfully.
- The live page returned HTTP 200 and contains both CV destinations and the REALITIES
  paper link.

## Technology

- Next.js 15
- TypeScript
- CSS Modules and global CSS tokens
- Vercel deployment via the GitHub `main` branch

## Local development

```powershell
npm ci
npm run dev
```

Before opening a pull request or requesting release approval, run:

```powershell
npm test
npm run lint
npm run typecheck
npm run build
```

The PR workflow runs the same quality gates. For a visual change, also check the header,
hero, featured CERT card, navigation and footer at desktop and mobile widths.

## Relevant implementation files

- `app/components/ExecutiveDossierApp.tsx` — page structure, navigation, CV downloads
  and case-study research block.
- `app/components/ExecutiveDossierApp.module.css` — dossier-specific visual styles.
- `public/` — downloadable CV assets and other public files.
- `tests/executive-dossier-precision.test.mjs` — regression assertions, including both
  CV paths and REALITIES research evidence.

## Release workflow

1. Work on a dedicated branch.
2. Preserve copy unless expressly authorised to edit it.
3. Run the checks above and visually inspect affected shared components.
4. Open a pull request; wait for GitHub checks and the Vercel preview to pass.
5. Merge and deploy only after the owner explicitly asks to push live.
6. Verify production status and the changed live-page elements after deployment.
