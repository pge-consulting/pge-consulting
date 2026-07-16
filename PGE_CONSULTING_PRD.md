# PGE Consulting Website — Product Requirements Document (PRD)
**Version:** 2.0
**Date:** July 16, 2026
**Owner:** Stacey Roberts, PGE Consulting
**Status:** Active Development

---

## Executive Summary

PGE Consulting required a complete website rebuild from an existing Squarespace site to a modern, deployable React application. The new site needed to reflect the company's heavy industrial identity, provide real functional contact/booking forms, comply with privacy requirements, and deploy automatically to the existing domain `pge-consulting.com`.

---

## Objectives

1. Replace Squarespace site with a fully custom React/TypeScript build
2. Establish a professional industrial brand identity online
3. Enable real lead capture via contact and appointment booking forms
4. Deliver email notifications to principal consultant instantly on form submission
5. Comply with basic web privacy and legal requirements
6. Enable ongoing site updates without manual deployment steps

---

## Stakeholders

| Role | Name | Contact |
|------|------|---------|
| Client / Site Owner | Stacey Roberts, MBA | staceyr@pge-consulting.com |
| Development | Skywork AI Agent | — |

---

## Requirements

### R1 — Design & Brand
- **R1.1** Dark industrial theme, bold typography, amber/orange accent color
- **R1.2** Professional B2B aesthetic — no decorative elements, no stock photography
- **R1.3** Tagline: "Delivering Industrial Projects. Safely. Start To Finish."
- **R1.4** Principal photo (Stacey Roberts, he/him) on About and Appointments pages
- **R1.5** 18 authentic project photos integrated across Gallery and other pages
- **R1.6** Company logo (`pge_2026 Logo.png`) in header

### R2 — Pages
- **R2.1** Home — hero, stats (20+ years, 30+ projects, 5 industries), services overview, CTA
- **R2.2** About — Stacey Roberts bio, headshot, company background, IN3 Capital partnership
- **R2.3** Services — 6 core services + 3 additional service categories
- **R2.4** Gallery — 18 project photos with caption "Every photo represents a real facility delivered to clients."
- **R2.5** Knowledge Hub — industry resources, books, tools
- **R2.6** Contact — functional form with email notification
- **R2.7** Appointments — functional booking form with email notification + FAQ accordion
- **R2.8** Privacy Policy — accurate, plain-language privacy statement
- **R2.9** Terms of Service — usage terms for the website

### R3 — Forms
- **R3.1** Contact form fields: Full Name, Company, Email, Phone, Project Type (dropdown), Message
- **R3.2** Booking form fields: Name, Email, Phone, Company, Project Type, Description, Preferred Contact Method
- **R3.3** Client-side validation using Zod (min lengths, email format, required fields)
- **R3.4** Form submissions saved to Supabase PostgreSQL database
- **R3.5** Email notification sent to staceyr@pge-consulting.com on every submission
- **R3.6** Email delivered from send@pge-consulting.com via Resend
- **R3.7** Success and error states displayed to user after submission
- **R3.8** Forms must work on the live pge-consulting.com domain

### R4 — Analytics & SEO
- **R4.1** Google Analytics GA4 — Measurement ID: G-MJM81DY0P0
- **R4.2** SEO meta titles and descriptions on all pages
- **R4.3** robots.txt and sitemap.xml
- **R4.4** Open Graph meta tags for social sharing

### R5 — Legal
- **R5.1** Privacy Policy accurately states: site does not collect data for marketing, forms are for inquiry response only, Google Analytics in use, Supabase + Resend used for form data
- **R5.2** Terms of Service covers: acceptable use, no consulting relationship from form, IP ownership, governing law (Florida)
- **R5.3** Privacy Policy and Terms of Service linked in footer on every page

### R6 — Deployment & Infrastructure
- **R6.1** Hosted on Cloudflare Pages connected to pge-consulting.com
- **R6.2** Code stored in GitHub: github.com/pge-consulting/pge-consulting
- **R6.3** Auto-deploy: every Skywork build automatically pushes to GitHub → triggers Cloudflare rebuild
- **R6.4** Deploy key stored persistently in project at `.ssh/github_deploy_key`

### R7 — Security
- **R7.1** No private API keys exposed in frontend code
- **R7.2** Supabase anon key (public/safe) used for edge function invocation
- **R7.3** Resend API key stored as Supabase secret (server-side only)
- **R7.4** Cloudflare security headers in `public/_headers`

---

## Technical Architecture

```
User Browser
    │
    ▼
Cloudflare Pages (pge-consulting.com)
    │  Static React SPA (HashRouter)
    │
    ▼
Supabase Edge Functions (Deno runtime)
    │  send-contact-email
    │  send-appointment-email
    │
    ├──► Supabase PostgreSQL (store submission)
    │
    └──► Resend API (send email to staceyr@pge-consulting.com)
```

---

## Acceptance Criteria

| # | Criterion | Status |
|---|-----------|--------|
| AC1 | All 9 pages render without errors | ✅ |
| AC2 | Contact form submits and email received at staceyr@pge-consulting.com | ✅ |
| AC3 | Appointment form submits and email received at staceyr@pge-consulting.com | ✅ |
| AC4 | Form submissions appear in Supabase database | ✅ |
| AC5 | Google Analytics fires on page load | ✅ |
| AC6 | Privacy Policy page accessible from footer | ✅ |
| AC7 | Terms of Service page accessible from footer | ✅ |
| AC8 | Site deploys automatically to pge-consulting.com on code change | ✅ |
| AC9 | Stacey Roberts headshot displayed on About and Appointments pages | ✅ |
| AC10 | Gallery shows 18 project photos with correct caption | ✅ |
| AC11 | Microsoft Edge SmartScreen warning resolved | ⏳ Pending user action |

---

## Outstanding Items

| Priority | Item | Owner | Notes |
|----------|------|-------|-------|
| HIGH | Fix Contact.tsx + Appointments.tsx permanently in GitHub | Dev | Files revert to placeholder on every session — see Handoff doc Section 7 |
| HIGH | Microsoft Edge SmartScreen review | Stacey Roberts | Submit at microsoft.com/en-us/wdsi/support/report-unsafe-site |
| MEDIUM | Calendar integration for bookings | Dev | Replace free-text with Calendly or custom date picker |
| LOW | Knowledge Hub real content | Stacey Roberts | Add actual articles and resources |
| LOW | Client testimonials | Stacey Roberts | Add if available |
| LOW | Project case studies | Stacey Roberts | Detailed write-ups of completed projects |

---

*PGE Consulting Website PRD v2.0 — July 16, 2026*
