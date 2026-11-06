# PGE Consulting Website

Marketing and lead-capture site for PGE Consulting (Pine Grove Enterprises), live at https://www.pge-consulting.com.

- **Stack:** React 18 + TypeScript + Vite, Tailwind CSS, shadcn/ui, HashRouter
- **Backend:** Supabase (form storage + edge functions) → Resend (email to staceyr@pge-consulting.com)
- **Hosting:** Cloudflare Pages, auto-deploys from `main` (~2 min per push)

**Before changing anything, read `CLAUDE.md`** — it holds the locked content, implementation rules, and pre-push checklist. `PGE_CONSULTING_HANDOFF.md` and `PGE_CONSULTING_PRD.md` are the project history.

Local dev: `cp .env.example .env && npm install && npm run dev`
