# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Monorepo for **Transformed Roofing** (transformedroofing.com), a roofing company in Statesville, NC. The site is a marketing website + lead-generation tool.

- `frontend/` — Next.js App Router + TypeScript, deployed to Vercel
- `backend/` — Django + DRF REST API, deployed separately (Render/Fly.io/Railway)

> **Status:** Repository is in initial setup phase. The `frontend/` and `backend/` directories have not been created yet.

---

## Commands

### Frontend (`frontend/`)

```bash
npm run dev        # Start dev server
npm run build      # Production build
npm run lint       # ESLint
npm run test       # Run tests (if configured)
```

### Backend (`backend/`)

```bash
python manage.py runserver        # Start dev server
python manage.py migrate          # Apply migrations
python manage.py test             # Run Django test suite
pytest                            # Run tests (preferred if configured)
pytest quotes/tests/test_calc.py  # Run a single test file
```

---

## Architecture

### Data Flow

```
Browser → Next.js (server component or API route)
       → Django API (POST /api/quote-tool/estimate/)
       → EagleView API (server-side only, never client-side)
       → PostgreSQL (lead + quote stored)
       → Quote range returned to frontend
```

### Key API Endpoints

| Method | Path | Purpose |
|--------|------|---------|
| `POST` | `/api/leads/` | Create a contact-form lead |
| `POST` | `/api/quote-tool/estimate/` | EagleView lookup + quote computation + lead storage |
| `GET`  | `/api/health/` | Uptime check |
| `GET`  | `/api/leads/` | Admin-only lead list |

### EagleView Integration

- All EagleView calls live in `backend/quotes/providers/eagleview.py`
- Credentials via env vars: `EAGLEVIEW_API_KEY` (+ any other required auth fields)
- Include retry logic with backoff; persist request IDs for auditing
- Use a mapping layer: EagleView response → normalized measurements
- Never call EagleView from the browser

### Quote Computation

Computed server-side using configurable constants (no hardcoded pricing):
- Price per square (low/high), minimum job cost, steepness/complexity multiplier, waste factor
- Store: normalized measurements used, constants version, final quote range

### Lead Storage

Both contact-form and quote-tool leads go to the same `Lead` model, distinguished by `source` field (e.g., `"contact_form"` vs `"web_quote_tool"`). Store: name, phone, address, email (optional), EagleView metadata, quote range, timestamps.

---

## Environment Variables

### Frontend
- `NEXT_PUBLIC_API_BASE_URL` — Django API base URL

### Backend
- `DJANGO_SECRET_KEY`, `DJANGO_DEBUG`, `DATABASE_URL`, `ALLOWED_HOSTS`, `CORS_ALLOWED_ORIGINS`
- `EAGLEVIEW_API_KEY` (and any other required EagleView auth fields)

---

## Key Constraints

- **EagleView secrets must never reach the client.** All EagleView calls are backend-only.
- **PII handling:** Do not log name/phone/address/email. Don't return more PII than needed in API responses.
- **CORS:** Backend must allow `https://transformedroofing.com` and Vercel preview domains.
- **Forms:** All forms need inline validation + spam protection (honeypot or CAPTCHA).
- **SEO is first-class:** Every marketing page needs unique title/description, Open Graph, canonical URL, and JSON-LD structured data (LocalBusiness/RoofingContractor schema).
- Use `next/image` for all images to maintain Core Web Vitals.

## Testing

- Backend: pytest preferred; unit test lead validation, quote calculation, and EagleView adapter mapping (mock external calls).
- Frontend: E2E preferred; avoid heavy component testing tooling unless already present.
