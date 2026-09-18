# Pragya — Making Learning Visible
## ANTIGRAVITY README — Team Collaboration Log

> This file tracks every significant change, edit, and decision made during development.
> Update this file whenever you make changes so teammates stay in sync.

---

### Project Info
- **Product Name:** Pragya — Making learning visible
- **Stack:** Next.js 15 + TypeScript + Tailwind CSS + shadcn/ui + Supabase
- **AI:** Gemini API (Teacher Copilot)
- **Assessment:** ASER-aligned adaptive diagnostic (deterministic logic)

### Color Palette (Color Hunt)
| Token | Hex | Usage |
|-------|-----|-------|
| Peach | #FFBE91 | CTAs, active states, mastery highlights |
| Soft Peach | #FFDDB0 | Section backgrounds, learning cards |
| Warm Ivory | #FFFCE1 | Page background |
| Sky Blue | #CFEBFF | AI features, analytics, progress |
| Charcoal | #2D2D2D | Text color (never pure black) |

---

## Changelog

### 2026-09-18 — Phase 1: Foundation & Scaffold
- [x] Created Next.js project with TypeScript + Tailwind + App Router
- [x] Configured design system with Color Hunt palette
- [x] Created layout system with role-based routing
- [x] Created landing page with product branding
- [x] Set up database types/schema
- [x] Created ANTIGRAVITY-README.md

### 2026-09-18 — Phase 3: AI Learning Investigator & Classification ✨
- [x] Built `src/lib/classifier.ts` deterministic skill classifier & confidence rating engine
- [x] Built `src/components/investigator/InvestigatorFeed.tsx` for real-time hypothesis, probe, evidence, and bottleneck tracking
- [x] Built `src/components/investigator/LearningDNA.tsx` for multidimensional skill fingerprinting (no single-score reduction)
- [x] Built `src/components/investigator/WhyPanelModal.tsx` for plain-language, explainable diagnostic reasoning
- [x] Integrated interactive Learning DNA & WHY Panel into Teacher Intelligence Dashboard (`/teacher`)

---

## Architecture Notes
- Assessment engine uses DETERMINISTIC logic, NOT LLM
- LLM (Gemini) used ONLY for Teacher Copilot and activity generation
- All student data is SYNTHETIC — no real children's data
- Product is NOT officially affiliated with ASER/Pratham/NCERT/NIPUN Bharat

## Team Guidelines
1. Update this file with every significant change
2. Include date, phase, and description
3. Mark breaking changes with ⚠️
4. Mark new features with ✨
5. Mark bug fixes with 🐛
