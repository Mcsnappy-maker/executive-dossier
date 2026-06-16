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
