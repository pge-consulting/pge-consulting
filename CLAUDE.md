# CLAUDE.md — PGE Consulting Website

Instructions for Claude. Read fully before making any change.

## Project Overview

Marketing and lead-capture website for PGE Consulting (Pine Grove Enterprises & Advisors LLC), Port Charlotte, FL. Principal: Stacey Roberts, MBA (**he/him** — always). Owner-side industrial project execution and advisory: RNG/anaerobic digestion, wood pellet manufacturing, heavy industrial, EPC oversight. PE partner: IN3 Capital.

- Live site: https://www.pge-consulting.com
- Contact: staceyr@pge-consulting.com · (804) 874-8874

## Locked Content — NEVER change without explicit approval

- Tagline (exact): **"Delivering Industrial Projects. Safely. Start To Finish."**
- Stats (exact): **20+ Years Experience · 30+ Projects Delivered · 5 Industries Served** (30+, not 50+)
- Gallery caption (exact): **"Every photo represents a real facility delivered to clients."**
- Pronouns for Stacey Roberts: **he/him** throughout
- Notification email: staceyr@pge-consulting.com · From address: send@pge-consulting.com
- Design system: dark industrial theme, amber/orange accent, no stock photography, no decorative elements

## Tech Stack

React 18 + TypeScript + Vite · Tailwind CSS + shadcn/ui · Framer Motion · React Hook Form + Zod · React Router **HashRouter** (all routes are `/#/path`) · Supabase (DB + edge functions) · Resend (email) · GA4 `G-MJM81DY0P0` · Cloudflare Pages hosting.

## Deployment

Cloudflare Pages watches GitHub `main` and auto-deploys to pge-consulting.com (~2 min) on every push. **GitHub is the single source of truth.** There is no other deploy step.

Workflow: edit → `npm run build` (must pass) → commit → `git push origin main` → verify live.

Legacy Skywork artifacts (`scripts/push-to-github.sh`, `postbuild` in package.json, `.ssh/`, `.github/workflows/sync-to-github.yml`, Gitea remote, `registry.npmmirror.com` in package-lock.json) are decommissioned — if any reappear, delete them; never restore them.

## Backend (do not modify without approval — it works)

- Supabase project: `aoccjukkftefxsrwfcjz` → https://aoccjukkftefxsrwfcjz.supabase.co
- Anon/publishable key (public by design, safe in frontend): `sb_publishable_RfdXRuog2DAhM5dE1K1_sA_XenKxVwi`
- Tables: `contact_submissions_2026_07_14`, `appointment_submissions_2026_07_14`
- Edge functions: `send-contact-email`, `send-appointment-email`, `test-email-2026-07-14` (keep for debugging)
- Supabase secrets (server-side only): `RESEND_API_KEY`, `RESEND_DOMAIN`
- Resend: verified domain pge-consulting.com; never expose the Resend API key in frontend code

Smoke test (expect `{"success":true,"emailSent":true}`; note it sends a real email):
```bash
curl -X POST "https://aoccjukkftefxsrwfcjz.supabase.co/functions/v1/send-contact-email" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sb_publishable_RfdXRuog2DAhM5dE1K1_sA_XenKxVwi" \
  -d '{"name":"Test","email":"staceyr@pge-consulting.com","company":"PGE","message":"Test"}'
```

## Critical Implementation Rules

1. **Form submissions use direct `fetch()`** to the edge function endpoints with the anon key as Bearer token — NOT `supabase.functions.invoke()`. See `src/pages/Contact.tsx` and `src/pages/Appointments.tsx` onSubmit handlers. Do not "refactor" these to the SDK.
2. **All 9 routes must exist** in `ROUTE_PATHS` (`src/lib/index.ts`) and `App.tsx`: `/`, `/about`, `/services`, `/gallery`, `/knowledge-hub`, `/contact`, `/appointments`, `/privacy`, `/terms`. Privacy and Terms have historically been dropped — verify they're present before and after any routing change.
3. **Footer** (`src/components/Layout.tsx`) must link Privacy Policy and Terms of Service on every page. Copyright: © 2026 PGE Consulting (Pine Grove Enterprises).
4. **index.html** must retain the GA4 script block (`G-MJM81DY0P0`) and the real meta title/description — never the "Skywork Generated Project" template.
5. **`.env`** (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`) is gitignored — recreate from `.env.example` on any new machine. `src/integrations/supabase/client.ts` must exist.
6. **`src/assets/images.ts`** is auto-generated — do not hand-edit. Photos live in `public/images/` (18 project photos + logo + headshot).
7. **shadcn/ui components** in `src/components/ui/` — do not edit.

## Pre-Push Checklist

- [ ] `npm run build` passes with zero errors (and `npx tsc --noEmit -p tsconfig.app.json`)
- [ ] All 9 routes render (spot-check Privacy and Terms)
- [ ] Locked content unchanged (tagline, stats, gallery caption, he/him)
- [ ] No secrets in frontend code (Resend key stays in Supabase secrets)
- [ ] index.html still has GA4 script and real title

After push: wait ~2 min, verify the change at pge-consulting.com (hard refresh), and for any form-related change, submit a real test through the live form and confirm the email arrives at staceyr@pge-consulting.com.

## Backlog (from PRD v2.0)

- Microsoft Edge SmartScreen review — Stacey submits at microsoft.com/en-us/wdsi/support/report-unsafe-site (domain reputation, not code)
- Calendar integration for Appointments (Calendly embed or date picker)
- Knowledge Hub real content · Case studies · Testimonials
- SEO: robots.txt, sitemap.xml, JSON-LD structured data, per-page meta
- Switch `npm run build` off `--mode development` (Skywork artifact) for a smaller production bundle

## Reference

Full history: `PGE_CONSULTING_HANDOFF.md` and `PGE_CONSULTING_PRD.md` in the repo root.
