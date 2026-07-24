# Get Click Media- Bulk SMS Page Design Spec
_Last updated: 2026-06-12_

---

## 1. Design Token System

All CSS variables live in `app/globals.css` under `:root`. These tokens are the **canonical source of truth**. Components reference tokens, not hardcoded hex values.

### 1.1 Color

#### Surfaces (3 levels- deliberate alternation)
| Token | Value | Usage |
|---|---|---|
| `--surface-0` | `#ffffff` | Cards, pricing, FAQ- pure white |
| `--surface-1` | `#f7f8fc` | First-level section tint- Features, HowItWorks |
| `--surface-2` | `#eef1f8` | Second-level tint- DLTCompliance |
| `--surface-hero` | `#e8ecf5` | PageHero background- cool intentional tint |

#### Brand (keep existing values)
| Token | Value | Usage |
|---|---|---|
| `--primary` | `#2563eb` | All primary actions, links, accents |
| `--primary-light` | `#38bdf8` | Gradient endpoint, highlights |
| `--primary-dark` | `#1e40af` | Hover states |

#### Ink (4-level text hierarchy)
| Token | Value | Usage |
|---|---|---|
| `--ink-1` | `#0c1220` | H1, H2, H3- deepest |
| `--ink-2` | `#334155` | Body copy, card descriptions |
| `--ink-3` | `#64748b` | Secondary text, subtitles |
| `--ink-4` | `#94a3b8` | Captions, trust strips, placeholders |

#### Borders
| Token | Value | Usage |
|---|---|---|
| `--border-subtle` | `#e8ecf4` | Card borders, dividers |
| `--border-medium` | `#d1d9ea` | Focused/active states |

#### Section background sequence
```
1  PageHero             → var(--surface-hero)  #e8ecf5
2  TrustBar             → var(--surface-0)     #ffffff
3  WhatIsBulkSMS        → var(--surface-0)     #ffffff
4  BulkSmsFeatures      → var(--surface-1)     #f7f8fc  ← first break
5  BulkSmsUseCases      → var(--surface-0)     #ffffff
6  BulkSmsHowItWorks    → var(--surface-1)     #f7f8fc
7  BulkSmsPricing       → var(--surface-0)     #ffffff  ← white = importance
8  BulkSmsDLTCompliance → var(--surface-2)     #eef1f8  ← authoritative
9  BulkSmsFAQ           → var(--surface-0)     #ffffff
10 BulkSmsFinalCTA      → dark gradient (unchanged)
```

---

### 1.2 Typography

Fonts: **Manrope** (body) / **Syne** (headings).
Always use `[font-family:var(--font-syne)]`- NOT `font-heading` (Tailwind v4 `font-*` group conflicts with `font-bold`).

#### Scale
| Role | Classes | Notes |
|---|---|---|
| **H1 / PageHero** | `text-3xl sm:text-4xl lg:text-[2.75rem]` | `leading-[1.1] tracking-[-0.02em]` |
| **H2 / Section** | `text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem]` | **Unified across ALL sections** |
| **H3 / Card** | `text-base sm:text-lg` | `font-semibold` |
| **Eyebrow** | `text-[0.6875rem] tracking-[0.1em] uppercase font-bold` | Always in pill badge |
| **Body** | `text-[0.9375rem] sm:text-base leading-[1.65]` | Replace `text-sm` body copy |
| **Caption** | `text-xs sm:text-[0.8125rem]` | Trust strips, disclaimers |

**Canonical H2 class string:**
```
text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] [font-family:var(--font-syne)] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--ink-1)]
```

**Canonical eyebrow class string:**
```
inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-primary
```

---

### 1.3 Spacing & Rhythm

| Element | Value | Change from current |
|---|---|---|
| Section padding | `py-20 sm:py-28` | Up from py-16/py-20- consistent everywhere |
| PageHero bottom | `pb-12 sm:pb-16` | Up from pb-10/pb-14 |
| Container | `max-w-7xl mx-auto px-5 sm:px-8` | `px-5` not `px-4`- slightly more air |
| Section header mb | `mb-12 sm:mb-16` | Consistent before card grids |
| Card padding | `p-6 sm:p-8` | Generous, modern SaaS |
| Card gap | `gap-6` | Between grid items |
| Header cluster gap | `gap-3` | eyebrow → H2 → subtitle |

---

### 1.4 Depth (2-level shadow system)

| Token | Value | Usage |
|---|---|---|
| `--shadow-card` | `0 1px 2px rgba(15,23,42,0.05), 0 4px 10px rgba(15,23,42,0.04)` | Card rest state |
| `--shadow-card-hover` | `0 2px 4px rgba(15,23,42,0.06), 0 10px 28px rgba(37,99,235,0.10)` | Card hover, active |
| `--shadow-elevated` | `0 4px 12px rgba(15,23,42,0.08), 0 20px 48px rgba(37,99,235,0.12)` | Hero image, floating badges, pricing highlight |

In Tailwind: `shadow-[var(--shadow-card)]` / `hover:shadow-[var(--shadow-card-hover)]`

---

### 1.5 Radius

| Token | Value | Tailwind | Usage |
|---|---|---|---|
| `--radius-sm` | `8px` | `rounded-lg` | Badges, chips, icon containers |
| `--radius-md` | `12px` | `rounded-xl` | **Cards (default)**, buttons, info boxes |
| `--radius-lg` | `20px` | `rounded-[20px]` | Hero image, featured cards |
| `--radius-pill` | `9999px` | `rounded-full` | All buttons, eyebrow badges |

Cards use `rounded-xl` (12px)- tighter than current `rounded-2xl` (16px). More architectural, less bubbly.

---

## 2. Component Upgrade Map

### PageHero
- Background: `var(--surface-hero)` `#e8ecf5` ← replaces `#E9E9E9`
- H1: `text-3xl sm:text-4xl lg:text-[2.75rem] [font-family:var(--font-syne)] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--ink-1)]`
- Image container: `rounded-[20px] overflow-hidden shadow-[var(--shadow-elevated)]`
- Bottom padding: `pb-12 sm:pb-16`

### WhatIsBulkSMS
- Section padding: `py-20 sm:py-28` (up from py-16 sm:py-20)
- H2: Use H2 scale
- Image container: `rounded-[20px] shadow-[var(--shadow-elevated)]`
- Body: `text-[0.9375rem] leading-[1.65] text-[var(--ink-2)]`

### BulkSmsFeatures
- Background: `bg-[var(--surface-1)]`
- H2: Use H2 scale
- Cards: `rounded-xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all duration-200`
- Icon container: `rounded-lg` (8px- tighter)

### BulkSmsUseCases
- Cards: Add `shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]`
- H2: Use H2 scale

### BulkSmsHowItWorks
- Background: `bg-[var(--surface-1)]`
- H2: Use H2 scale
- Step cards: `rounded-xl shadow-[var(--shadow-card)]`

### BulkSmsPricing
- H2: Use H2 scale
- Highlighted card: remove `scale-105` (breaks mobile layout)- use `shadow-[var(--shadow-elevated)] border-2 border-primary` instead
- Section padding: `py-20 sm:py-28`

### BulkSmsDLTCompliance
- Background: `bg-[var(--surface-2)]` = `#eef1f8` (more distinct than current #f8fafc)
- Info box: `bg-white border border-[var(--border-subtle)] shadow-[var(--shadow-card)]`
- H2: Use H2 scale

### BulkSmsFAQ
- H2: Use H2 scale
- Item border: `border-[var(--border-subtle)]`
- Question text: `text-[var(--ink-1)]`

### BulkSmsFinalCTA
- Keep gradient and CTA hierarchy (already good)
- Container gap: `gap-8` (up from gap-6)

---

## 3. Motion

### Card hover (Features, UseCases, HowItWorks)
```
hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] transition-all duration-200
```

### Buttons
- Primary: `hover:scale-105 hover:shadow-[var(--shadow-card-hover)] transition-all duration-200`
- Secondary: `hover:border-primary hover:text-primary hover:bg-blue-50/30 transition-colors duration-150`

### FAQ accordion
- Question: `transition-colors duration-150`
- Answer: `transition-all duration-200`

---

## 4. Buttons (canonical)

**Primary CTA:**
```
inline-flex items-center gap-2 px-5 sm:px-6 h-11 sm:h-12 rounded-full
bg-[linear-gradient(135deg,var(--primary),var(--primary-light))]
text-white text-sm font-bold
shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:scale-105
transition-all duration-200 cursor-pointer
```

**Secondary outline:**
```
inline-flex items-center justify-center px-5 sm:px-6 h-11 sm:h-12 rounded-full
border border-[var(--border-subtle)] bg-white
text-[var(--ink-2)] text-sm font-semibold
hover:border-primary hover:text-primary hover:bg-blue-50/30
transition-all duration-150
```

---

## 5. Hard Constraints

- No structural/layout changes
- No JSON-LD or heading hierarchy changes
- No routing changes
- Light mode only- no dark variants
- No new npm packages
- Do NOT modify `body > *:not(.bg-balls):not(.layout-header)` rule in globals.css

---

## 6. Build Checklist

- [ ] Phase 0: Tokens added to globals.css + this spec written
- [ ] Phase 1: Section backgrounds + padding unified across all components
- [ ] Phase 2: Per-component polish (H2 scale, eyebrow, shadows, radius)
- [ ] Phase 3: Motion (card hovers, FAQ, button transitions)
- [ ] Phase 4: Self-critique + verify no broken imports/types
