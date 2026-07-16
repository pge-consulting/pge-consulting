# PGE Consulting Website — Complete Project Handoff Document
**For use in a new Skywork chat session to continue this project**
**Last updated: July 16, 2026**

---

## ⚠️ CRITICAL ISSUE TO FIX FIRST IN NEW SESSION

The GitHub repository at `github.com/pge-consulting/pge-consulting` is **reverting Contact.tsx and Appointments.tsx to old placeholder versions** on every `git fetch/reset`. The working versions with real `fetch()` calls to Supabase Edge Functions must be reapplied each session. See Section 7 for the exact correct code.

Additionally, `Privacy.tsx`, `Terms.tsx`, `.env`, and `src/integrations/supabase/client.ts` go missing after GitHub sync. These must be recreated. See Section 7.

---

## 1. PROJECT OVERVIEW

**Company:** PGE Consulting (also: Pine Grove Enterprises / Pine Grove Enterprises & Advisors LLC)
**Principal:** Stacey Roberts, MBA — **male (he/him)** — 20+ years industrial project experience
**Website:** https://www.pge-consulting.com
**Business:** Owner-side project execution and industrial advisory
**Specialties:** RNG/Anaerobic Digestion, Wood Pellet Manufacturing, Heavy Industrial, EPC Oversight
**Location:** Port Charlotte, FL, USA
**Phone:** (804) 874-8874
**Email:** staceyr@pge-consulting.com
**PE Partner:** IN3 Capital (private equity technical advisory)

### Company Stats (exact values — do not change)
- 20+ Years Experience
- 30+ Projects Delivered  ← was "50+" — user corrected to "30+"
- 5 Industries Served

### Tagline (exact — do not change)
> "Delivering Industrial Projects. Safely. Start To Finish."

---

## 2. TECH STACK

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + TypeScript + Vite |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Animation | Framer Motion |
| Forms | React Hook Form + Zod validation |
| Routing | React Router v6 (HashRouter — uses `#/` paths) |
| Backend | Supabase (database + edge functions) |
| Email | Resend (transactional email) |
| Analytics | Google Analytics G-MJM81DY0P0 |
| Hosting | Cloudflare Pages (via GitHub auto-deploy) |
| Git | Skywork Gitea (origin) + GitHub (production mirror) |

---

## 3. REPOSITORY & DEPLOYMENT

### Skywork Project
- **Project name:** `pge_consulting`
- **Gitea repo:** `ssh://git@gitea.skywork.ai/PROD_2538799219559257936/pge_consulting.git`
- **Gitea user:** `PROD_2538799219559257936`

### GitHub Repository
- **URL:** https://github.com/pge-consulting/pge-consulting
- **SSH:** `git@github.com:pge-consulting/pge-consulting.git`
- **GitHub org:** `pinegroveconsulting`
- **Branch:** `main`
- **Deploy keys page:** https://github.com/pge-consulting/pge-consulting/settings/keys

### Cloudflare Pages
- Watches GitHub `main` branch
- Auto-deploys to `pge-consulting.com` on every push (~2 min)
- No manual steps needed after GitHub push

### Auto-Sync Setup
A deploy key is stored at:
```
pge_consulting/.ssh/github_deploy_key
```
Push script at:
```
pge_consulting/scripts/push-to-github.sh
```
`package.json` has `postbuild` script that calls push-to-github.sh automatically.

**If deploy key is missing** (server restart clears `/tmp/`):
```bash
ssh-keygen -t ed25519 -C "skywork-pge-consulting" -f /tmp/pge_deploy_key -N ""
cat /tmp/pge_deploy_key.pub
# Add public key to: https://github.com/pge-consulting/pge-consulting/settings/keys
# Allow write access = YES
```
Then push:
```bash
eval "$(ssh-agent -s)"
ssh-add /tmp/pge_deploy_key
GIT_SSH_COMMAND="ssh -i /tmp/pge_deploy_key" git -C /path/to/pge_consulting push github main --force
```

---

## 4. SUPABASE BACKEND

### Project Credentials
- **Project ID:** `aoccjukkftefxsrwfcjz`
- **Project URL:** `https://aoccjukkftefxsrwfcjz.supabase.co`
- **Anon/Publishable Key:** `sb_publishable_RfdXRuog2DAhM5dE1K1_sA_XenKxVwi`
- **Dashboard:** https://supabase.com/dashboard/project/aoccjukkftefxsrwfcjz

### Database Tables
| Table | Purpose |
|-------|---------|
| `contact_submissions_2026_07_14` | Contact form submissions |
| `appointment_submissions_2026_07_14` | Appointment booking submissions |

### Edge Functions (Deployed)
| Function | Endpoint | Purpose |
|----------|----------|---------|
| `send-contact-email` | `/functions/v1/send-contact-email` | Contact form → save to DB + email via Resend |
| `send-appointment-email` | `/functions/v1/send-appointment-email` | Booking form → save to DB + email via Resend |
| `test-email-2026-07-14` | `/functions/v1/test-email-2026-07-14` | Test function (keep for debugging) |

### Secrets Stored in Supabase
- `RESEND_API_KEY` — Resend API key
- `RESEND_DOMAIN` — `pge-consulting.com`

### Test Edge Function (confirmed working)
```bash
curl -X POST "https://aoccjukkftefxsrwfcjz.supabase.co/functions/v1/send-contact-email" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sb_publishable_RfdXRuog2DAhM5dE1K1_sA_XenKxVwi" \
  -d '{"name":"Test","email":"staceyr@pge-consulting.com","company":"PGE","message":"Test"}'
# Expected response: {"success":true,"emailSent":true}
```

---

## 5. EMAIL (RESEND)

- **Service:** Resend (https://resend.com)
- **Verified domain:** `pge-consulting.com`
- **From address:** `send@pge-consulting.com`
- **To address:** `staceyr@pge-consulting.com`
- **Delivery:** Confirmed working — test email received successfully

---

## 6. SITE PAGES & ROUTES

All routes use HashRouter (`/#/path`):

| Page | Route | File | Status |
|------|-------|------|--------|
| Home | `/#/` | `src/pages/Home.tsx` | ✅ Live |
| About | `/#/about` | `src/pages/About.tsx` | ✅ Live |
| Services | `/#/services` | `src/pages/Services.tsx` | ✅ Live |
| Gallery | `/#/gallery` | `src/pages/Gallery.tsx` | ✅ Live |
| Knowledge Hub | `/#/knowledge-hub` | `src/pages/KnowledgeHub.tsx` | ✅ Live |
| Contact | `/#/contact` | `src/pages/Contact.tsx` | ⚠️ Reverts to old code — see Section 7 |
| Appointments | `/#/appointments` | `src/pages/Appointments.tsx` | ⚠️ Reverts to old code — see Section 7 |
| Privacy Policy | `/#/privacy` | `src/pages/Privacy.tsx` | ⚠️ Goes missing — see Section 7 |
| Terms of Service | `/#/terms` | `src/pages/Terms.tsx` | ⚠️ Goes missing — see Section 7 |

### ROUTE_PATHS (must match App.tsx)
```typescript
export const ROUTE_PATHS = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  GALLERY: '/gallery',
  KNOWLEDGE: '/knowledge-hub',
  CONTACT: '/contact',
  APPOINTMENTS: '/appointments',
  PRIVACY: '/privacy',
  TERMS: '/terms',
} as const;
```

### App.tsx must include (Privacy + Terms routes are frequently lost)
```tsx
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
// ...inside <Routes>:
<Route path={ROUTE_PATHS.PRIVACY} element={<Privacy />} />
<Route path={ROUTE_PATHS.TERMS} element={<Terms />} />
```

---

## 7. CRITICAL CODE — MUST REAPPLY EACH SESSION

### 7a. src/integrations/supabase/client.ts
```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://aoccjukkftefxsrwfcjz.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_RfdXRuog2DAhM5dE1K1_sA_XenKxVwi'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

### 7b. .env (project root)
```
VITE_SUPABASE_URL=https://aoccjukkftefxsrwfcjz.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_RfdXRuog2DAhM5dE1K1_sA_XenKxVwi
```

### 7c. Contact.tsx — onSubmit function (CORRECT VERSION)
The `onSubmit` in Contact.tsx must use direct `fetch()` — NOT `supabase.functions.invoke()`:
```typescript
const SUPABASE_URL = 'https://aoccjukkftefxsrwfcjz.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_RfdXRuog2DAhM5dE1K1_sA_XenKxVwi';

// State additions needed:
const [submitError, setSubmitError] = useState<string | null>(null);
// Add CheckCircle2, AlertCircle to lucide imports

const onSubmit = async (data: ContactFormData) => {
  setSubmitError(null);
  try {
    const res = await fetch(`${SUPABASE_URL}/functions/v1/send-contact-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({
        name: data.fullName,
        email: data.email,
        company: data.companyName,
        message: `Project Type: ${data.projectType}\nPhone: ${data.phone}\n\n${data.message}`,
      }),
    });
    const responseText = await res.text();
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${responseText}`);
    setIsSubmitted(true);
    reset();
    setProjectType('');
    setTimeout(() => setIsSubmitted(false), 8000);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    setSubmitError(`Error: ${msg} — or email staceyr@pge-consulting.com directly`);
  }
};
```

### 7d. Appointments.tsx — onSubmit function (CORRECT VERSION)
```typescript
const SUPABASE_URL = 'https://aoccjukkftefxsrwfcjz.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_RfdXRuog2DAhM5dE1K1_sA_XenKxVwi';

// State additions needed:
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitError, setSubmitError] = useState<string | null>(null);
// Add reset to useForm destructure
// Add AlertCircle to lucide imports
// Add: import { Alert, AlertDescription } from "@/components/ui/alert";

const onSubmit = async (data: BookingFormData) => {
  setIsSubmitting(true);
  setSubmitError(null);
  try {
    const res = await fetch(`${SUPABASE_URL}/functions/v1/send-appointment-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        company: data.company,
        project_type: data.projectType,
        preferred_date: null,
        message: `Phone: ${data.phone}\nPreferred contact: ${data.contactMethod}\n\n${data.description}`,
      }),
    });
    const responseText = await res.text();
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${responseText}`);
    setIsSubmitted(true);
    reset();
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    setSubmitError(`Error: ${msg} — or email staceyr@pge-consulting.com directly`);
  } finally {
    setIsSubmitting(false);
  }
};
```

### 7e. Layout.tsx footer — must include Privacy/Terms links
```tsx
<div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
  <p>© 2026 PGE Consulting (Pine Grove Enterprises). All rights reserved.</p>
  <div className="flex items-center gap-6">
    <Link to={ROUTE_PATHS.PRIVACY} className="hover:text-primary transition-colors">Privacy Policy</Link>
    <Link to={ROUTE_PATHS.TERMS} className="hover:text-primary transition-colors">Terms of Service</Link>
  </div>
</div>
```

### 7f. index.html — must include Google Analytics + correct meta tags
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PGE Consulting | Industrial Project Execution & Advisory</title>
    <meta name="description" content="Owner-side project execution for complex industrial facilities. RNG, anaerobic digestion, wood pellet manufacturing. 20+ years. 30+ projects delivered." />

    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-MJM81DY0P0"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-MJM81DY0P0');
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## 8. FILE STRUCTURE

```
pge_consulting/
├── .env                          # VITE_SUPABASE_URL + VITE_SUPABASE_ANON_KEY (often missing)
├── .ssh/
│   └── github_deploy_key         # SSH private key for GitHub push (stored persistently)
├── .github/
│   └── workflows/
│       └── sync-to-github.yml    # GitHub Actions auto-sync workflow
├── index.html                    # Must have GA script + correct meta tags
├── package.json                  # Has postbuild: "bash scripts/push-to-github.sh || true"
├── scripts/
│   └── push-to-github.sh         # Auto-push to GitHub after build
├── public/
│   ├── images/                   # All user-uploaded photos
│   │   ├── pge_2026 Logo.png
│   │   ├── Linkedin headshot.jpeg  # Stacey Roberts headshot (used on About + Appointments)
│   │   ├── dual belt dryer.jpg
│   │   ├── enviva 2.jpg
│   │   ├── Black Soil Farm 20230715.jpg
│   │   ├── Van Ess Farm upgrader 20230715.jpg
│   │   ├── Van Ess Farm 20230715.jpg
│   │   ├── 005.jpg
│   │   ├── Roorda farm 20230715.jpg
│   │   ├── power.jpg
│   │   ├── posco.jpeg
│   │   ├── P6240057.jpg
│   │   ├── Papas.jpg
│   │   ├── Port.jpeg
│   │   ├── Kirkman Farm 20230715.jpg
│   │   ├── overland.jpg
│   │   ├── IMGP5106 (DESKTOP-IC1G6H9's conflicted copy 2018-01-07).jpg
│   │   ├── IMGP5532.jpg
│   │   └── enviva.jpg
│   ├── _headers                  # Cloudflare security headers
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── images.ts             # IMAGES.XXX constants — auto-generated, do not edit
│   ├── components/
│   │   ├── Layout.tsx            # Header + Footer (nav, logo, footer links)
│   │   ├── Cards.tsx             # Reusable card components
│   │   ├── Seo.tsx               # SEO meta tag component
│   │   └── ui/                   # shadcn/ui components (do not edit)
│   ├── data/
│   │   └── index.ts              # SERVICES, NAV_ITEMS, COMPANY_STATS, CONTACT_INFO, etc.
│   ├── integrations/
│   │   └── supabase/
│   │       └── client.ts         # Supabase client (often missing — see Section 7a)
│   ├── lib/
│   │   ├── index.ts              # ROUTE_PATHS + TypeScript interfaces
│   │   └── motion.ts             # Framer Motion animation variants
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Gallery.tsx
│   │   ├── KnowledgeHub.tsx
│   │   ├── Contact.tsx           # ⚠️ Frequently reverts — see Section 7c
│   │   ├── Appointments.tsx      # ⚠️ Frequently reverts — see Section 7d
│   │   ├── Privacy.tsx           # ⚠️ Frequently goes missing — recreate from Section 9
│   │   ├── Terms.tsx             # ⚠️ Frequently goes missing — recreate from Section 9
│   │   └── NotFound.tsx
│   ├── App.tsx                   # Routes — must include Privacy + Terms
│   ├── main.tsx                  # Entry point
│   └── index.css                 # Tailwind v4 design system (dark industrial theme)
└── supabase/
    ├── migrations/
    │   └── create_forms_tables_2026_07_14.sql
    └── edge_function/
        ├── send-contact-email.ts
        ├── send-appointment-email.ts
        └── test-email-2026-07-14.ts
```

---

## 9. PAGE CONTENT NOTES

### Gallery Page
- Bottom caption must read: **"Every photo represents a real facility delivered to clients."**
- NOT: "Every photo represents a real facility delivered safely and on schedule." (old text)

### About Page
- Stacey Roberts photo: `/images/Linkedin headshot.jpeg`
- Pronouns: **he/him** throughout
- Title: Stacey Roberts, MBA

### Home Page Hero
- Tagline: "Delivering Industrial Projects. Safely. Start To Finish."

### Design System
- **Theme:** Dark industrial, bold, authoritative
- **Accent color:** Amber/orange (`primary`)
- **Typography:** Inter (body), JetBrains Mono (accents/labels)
- **Style:** B2B credibility, no decorative elements, field-driven messaging

---

## 10. KNOWN ISSUES & THEIR FIXES

| Issue | Root Cause | Fix |
|-------|-----------|-----|
| Contact/Appointments form shows "Something went wrong" | GitHub sync reverts onSubmit to placeholder `console.log` version | Reapply Section 7c and 7d code |
| Privacy.tsx / Terms.tsx missing | Not in GitHub repo — lost in force push | Recreate from scratch (see Section 9 descriptions) |
| .env missing | Gitignored or lost in sync | Recreate from Section 7b |
| Supabase client.ts missing | Not committed to git | Recreate from Section 7a |
| Deploy key missing from /tmp/ | Server restart clears /tmp/ | Key now stored at `.ssh/github_deploy_key` in project |
| index.html missing GA + meta | GitHub has old template version | Reapply Section 7f |
| ROUTE_PATHS missing PRIVACY/TERMS | GitHub reverts lib/index.ts | Add to ROUTE_PATHS, add imports/routes in App.tsx |
| Microsoft Edge SmartScreen warning | Domain reputation issue (not code) | User must submit to Microsoft: https://www.microsoft.com/en-us/wdsi/support/report-unsafe-site |

---

## 11. WEBSITES REFERENCED IN THIS PROJECT

| URL | Purpose |
|-----|---------|
| https://www.pge-consulting.com | Original/live website being rebuilt |
| https://pge-consulting.skywork.website | Skywork published domain |
| https://supabase.com/dashboard/project/aoccjukkftefxsrwfcjz | Supabase project dashboard |
| https://resend.com | Email delivery service dashboard |
| https://github.com/pge-consulting/pge-consulting | GitHub production repo |
| https://github.com/pge-consulting/pge-consulting/settings/keys | GitHub deploy keys management |
| https://dash.cloudflare.com | Cloudflare Pages hosting dashboard |
| https://analytics.google.com | Google Analytics (G-MJM81DY0P0) |
| https://www.microsoft.com/en-us/wdsi/support/report-unsafe-site | Microsoft SmartScreen false positive reporting |
| https://tools.google.com/dlpage/gaoptout | Google Analytics opt-out (referenced in Privacy Policy) |

---

## 12. CURRENT PRD (PRODUCT REQUIREMENTS DOCUMENT)

### Completed ✅
- [x] Full website rebuild (React + TypeScript + Vite + Tailwind v4 + shadcn/ui)
- [x] Dark industrial design theme with amber accents
- [x] All 9 pages: Home, About, Services, Gallery, Knowledge Hub, Contact, Appointments, Privacy, Terms
- [x] Stacey Roberts headshot integrated (About + Appointments pages)
- [x] Pronouns corrected to he/him throughout
- [x] Tagline: "Delivering Industrial Projects. Safely. Start To Finish."
- [x] Stats: 30+ Projects Delivered (corrected from 50+)
- [x] 18 project photos integrated across pages and gallery
- [x] Gallery caption corrected
- [x] Contact form with Zod validation → Supabase Edge Function → Resend email
- [x] Appointments booking form with Zod validation → Supabase Edge Function → Resend email
- [x] Form submissions saved to Supabase database
- [x] Email delivery to staceyr@pge-consulting.com confirmed working
- [x] Google Analytics G-MJM81DY0P0 installed
- [x] Privacy Policy page
- [x] Terms of Service page
- [x] Footer with Privacy + Terms links, copyright © 2026
- [x] Supabase backend (database + edge functions)
- [x] Resend domain pge-consulting.com verified
- [x] Cloudflare Pages deployment
- [x] Auto-sync: Skywork build → GitHub → Cloudflare Pages
- [x] SEO meta tags + robots.txt + sitemap

### Pending / Future Enhancements
- [ ] **Persistent form fix** — The GitHub repo needs to be updated so Contact.tsx and Appointments.tsx with correct `fetch()` calls are committed, so they don't revert on next session
- [ ] **Microsoft Edge SmartScreen** — User needs to manually submit domain to Microsoft for whitelist review at: https://www.microsoft.com/en-us/wdsi/support/report-unsafe-site
- [ ] **Calendar integration** — Replace free-text appointment booking with a real calendar picker (e.g. Calendly embed or custom date picker)
- [ ] **Blog/Knowledge Hub content** — Add real articles to the Knowledge Hub page
- [ ] **Case studies** — Add detailed project case studies to Services or a new Projects page
- [ ] **Testimonials** — Add client testimonials if available
- [ ] **SEO optimization** — Add structured data (JSON-LD), improve page-specific meta descriptions

---

## 13. HOW TO START A NEW SESSION

Paste this at the top of a new Skywork chat:

> "I am continuing work on the PGE Consulting website project. The Gitea repo is `ssh://git@gitea.skywork.ai/PROD_2538799219559257936/pge_consulting.git` and GitHub is `github.com/pge-consulting/pge-consulting`. Please read the handoff document at `pge_consulting/PGE_CONSULTING_HANDOFF.md` and the transcript summary I am attaching. The Supabase account and project are already connected. The first priority is to fix the Contact.tsx and Appointments.tsx files which have reverted to placeholder versions — the correct code is in Section 7 of the handoff document."

---

## 14. QUICK REFERENCE — CREDENTIALS SUMMARY

| Item | Value |
|------|-------|
| Supabase URL | `https://aoccjukkftefxsrwfcjz.supabase.co` |
| Supabase Anon Key | `sb_publishable_RfdXRuog2DAhM5dE1K1_sA_XenKxVwi` |
| Google Analytics ID | `G-MJM81DY0P0` |
| Resend domain | `pge-consulting.com` |
| Resend from email | `send@pge-consulting.com` |
| Notification email | `staceyr@pge-consulting.com` |
| GitHub repo | `git@github.com:pge-consulting/pge-consulting.git` |
| Gitea repo | `ssh://git@gitea.skywork.ai/PROD_2538799219559257936/pge_consulting.git` |
| Deploy key location | `pge_consulting/.ssh/github_deploy_key` |
| Skywork project name | `pge_consulting` |

---

*Document generated July 16, 2026. This file is committed to the Skywork Gitea repo at `pge_consulting/PGE_CONSULTING_HANDOFF.md`.*
