# Signal Deck

Signal Deck is a private, high-end command centre for operators managing multiple inboxes, brands, and social channels from one workspace.

## Current scope

- `Today`, `Inbox`, `Create`, `Channels`, and `Library` views
- `Workspace -> Channels -> Accounts` information architecture
- Attention Board, Channel Pulse, Draft + Queue, and right-rail operator tools
- A dark editorial dashboard direction for the standalone product shell

## Stack

- Next.js 15
- TypeScript
- CSS design tokens in `app/globals.css`

## Run locally

```powershell
npm.cmd install
npm.cmd run dev
```

Build for production:

```powershell
npm.cmd run build
npm.cmd run start
```

## Notes

This repository now contains the standalone Signal Deck product shell. Connector logic, OAuth flows, data sync, and Supabase-backed persistence can be layered on next without inheriting the previous project model.

## Leadership dossier quality checks
Run `npm ci`, `npm run lint`, `npm run typecheck`, `npm test` and `npm run build` before release. The GitHub Actions pull-request workflow runs the same checks.

The existing Word CV remains at `/Mark_OHare_CV_2026_V1.docx`. The added **Print / Save as PDF** action uses the browser print dialog; it is not a pre-generated downloadable PDF.

Before public release, verify qualification titles and SCQF levels, attribution of claims, responsive screenshots, print output and the content of the Word document. Legacy stylesheet cleanup is intentionally deferred until visual regression checks can be completed.

## Editorial finishing pass

The first case study (CERT) is intentionally featured while Lifelink and Kelloch remain supporting evidence. The duplicate animated skills ticker has been removed; existing restrained hero/scroll motion remains unchanged.

The main CV link now targets `/Mark_OHare_Leadership_CV_2026.pdf`, a concise two-page downloadable leadership CV derived from the supplied detailed Word CV. The original DOCX remains available as a secondary detailed download. The legacy print stylesheet remains for readers who choose to print the webpage; it is not the primary PDF experience.
