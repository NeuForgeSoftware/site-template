# PROMPTS.md — Claude Code playbook for site builds

Copy-paste prompts, one phase per session. Start each phase in plan mode
(shift+tab) so you approve the approach before code changes. Commit after
every phase. These are written for the neuforge.io rebuild; the bracketed
parts are what you swap for client builds later.

---

## Phase 0 — Session opener (paste at the start of EVERY session)

> Read CLAUDE.md and the full project structure before doing anything.
> Confirm you understand: (1) where site data lives, (2) the SEO rules,
> (3) the quality gate. Summarize the current state of the project in
> 3 sentences, then wait for my instructions.

Why: forces orientation instead of guessing, and the summary tells you
immediately if it has misread the project.

---

## Phase 1 — Adapt the skeleton

> We are adapting this client-site template into the NeuForge Labs
> marketing site. Plan first, don't write code until I approve.
>
> Requirements:
> 1. Rework src/config/site.ts for NeuForge Labs itself, using ONLY the
>    facts in the "Facts" section of CLAUDE.md. Change schemaType to
>    "ProfessionalService". Service area: Kyneton, Woodend, Gisborne,
>    Castlemaine, Bendigo, Macedon Ranges.
> 2. Restructure src/pages to: index, services, work, neuplayer, about,
>    contact, privacy. Delete pages that don't apply. Update Header nav
>    to match.
> 3. Add a config section for NeuPlayer (name, tagline, Play Store URL,
>    price, feature list) and one for the service offer (Launch Package
>    $2,500 with its inclusions; Care Plan $79/month with its inclusions)
>    so pages read from config, never hardcode prices.
> 4. Structure only — use short placeholder headings per page marked
>    with TODO comments. No lorem ipsum paragraphs.
> 5. npm run build must pass with zero errors before you finish.
>    Commit as "phase 1: adapt skeleton for neuforge.io".

---

## Phase 2 — Content migration with fact-checking

First: save the old site's pages into /reference (curl each URL to an
.html file, or paste content into .md files). Then:

> The /reference folder contains content from the OLD neuforge.io site.
> Migrate it into the new pages, with these rules:
>
> 1. The old site contains factual errors. Where /reference contradicts
>    the Facts section of CLAUDE.md, CLAUDE.md wins. Do not silently
>    pick one — list every contradiction you find in your final summary.
> 2. Rewrite, don't paste: keep the meaning, match the new site's voice
>    (plain, confident, no marketing fluff, Australian English).
> 3. Every page gets a unique title and meta description following the
>    SEO rules in CLAUDE.md.
> 4. Anything with no source content gets a TODO comment, not invented
>    facts. Never invent testimonials, stats, client names, or dates.
> 5. Build must pass. Commit as "phase 2: migrate and correct content".

---

## Phase 3 — Services page as a sales page

> Build out /services as the page that sells the Launch Package. Plan
> the section order first and show me before writing code.
>
> Content requirements:
> 1. One offer, prices visible: Launch Package $2,500 fixed — [5 pages,
>    mobile-friendly, Google Business Profile setup, contact form, local
>    SEO, 2-week delivery, one revision round]. Care Plan $79/month —
>    [hosting, security, daily backups, 30 min of changes, monitoring].
> 2. Audience: small business owners in the Macedon Ranges who are not
>    technical. No jargon anywhere on this page.
> 3. Structure: what you get → what it costs → how it works (3 steps)
>    → FAQ (reuse the Faq component; write 4-5 real objections like
>    "what if I want changes later") → single CTA repeated: "Book a
>    15-minute chat" linking to /contact.
> 4. Target keyword for title/description: "web design Kyneton" /
>    "Macedon Ranges".
> 5. Build must pass. Commit as "phase 3: services sales page".

---

## Phase 4 — NeuPlayer product page

> Build out /neuplayer as the product page for our Android audiobook
> player. All facts from config/CLAUDE.md only — do not describe
> features you cannot verify exist.
>
> 1. Structure: hero (name, one-line pitch, Play Store badge/button) →
>    key features grid → premium pricing (one-time $2.99, no ads, no
>    subscription — make this the highlight, it's the differentiator) →
>    screenshots section (placeholder image slots with exact dimensions
>    noted in TODO comments; I'll add real screenshots) → final CTA.
> 2. Add SoftwareApplication JSON-LD for this page (operatingSystem:
>    Android, offers with the price, applicationCategory).
> 3. Title/description target: "audiobook player android" +
>    "m4b player".
> 4. Build must pass. Commit as "phase 4: neuplayer page".

---

## Phase 5 — SEO and quality audit

> Audit pass. Do not add features. In order:
>
> 1. Run npm run build; fix any errors or warnings.
> 2. Check EVERY page against the SEO rules in CLAUDE.md: unique title,
>    unique description with location keywords, exactly one h1, alt text
>    on every image, canonical URL. Produce a table of violations first,
>    then fix them.
> 3. Verify the JSON-LD on index (ProfessionalService) and /neuplayer
>    (SoftwareApplication) is valid JSON and matches config facts.
> 4. Grep for TODO, lorem, placeholder, and [brackets] across src/ —
>    list every hit. Fix what you can from config; leave a summary list
>    of what needs ME (photos, screenshots, testimonials).
> 5. Commit as "phase 5: seo and quality audit".

The list in step 4 is your personal punch list — do those by hand, they
need real assets only you have.

---

## Phase 6 — Pre-cutover check (after your manual punch list)

> Final pre-launch verification:
> 1. npm run build, then npm run preview, and fetch every page of the
>    preview — confirm each returns 200 and contains its expected h1.
> 2. Confirm no remaining TODOs, no placeholder images referenced,
>    contact form posts to the real Web3Forms key.
> 3. Print a launch summary: page list with titles/descriptions, and
>    anything you'd flag before this goes live.

Then YOU (not Claude): check the Vercel preview URL on a real phone,
run PageSpeed Insights, submit the form once for real, click every
link. Swap the domain when all green.

---

## Habits that make every phase go better

- One phase per session. Fresh session = fresh context = fewer confused
  edits.
- End almost every prompt with: "run npm run build and fix errors
  before finishing."
- If a change goes sideways: "git diff, explain what you changed and
  why" — then revert the commit if needed. Commits are your undo.
- When it does something clever you want kept forever, tell it:
  "add that convention to CLAUDE.md."
- Improvements that are generic → merge back into the template repo.

## Client-build variant

For client sites the playbook shrinks: Phase 1 is just filling in
site.ts from your discovery notes, Phase 2 is their content, Phase 3-4
collapse into "populate the pages", Phase 5-6 run as-is. Copy this
file into each client repo and adjust.
