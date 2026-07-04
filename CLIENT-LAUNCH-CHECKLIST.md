# Client Launch Checklist — NeuForge Labs

Duplicate this file for every client: `checklist-[client-name].md`. Nothing goes live until every box is ticked.

Client: ____________________  Start date: ________  Target launch: ________

## 1. Kickoff & content intake (day 1)
- [ ] Signed agreement received (portfolio or paid)
- [ ] Care Plan subscription created in Stripe (starts at launch — set trial end = launch date)
- [ ] Content received: services list, about text, photos, logo (chase at day 5 and day 10 — clause in agreement)
- [ ] Photo session done at their premises if their photos are weak (30 min, phone camera)
- [ ] Their "question I get every day" noted → goes above the fold
- [ ] Domain situation confirmed: registered? in THEIR name? registrar login available?

## 2. Repo & config setup (day 1, ~30 min)
- [ ] New repo from template: `client-[businessname]`
- [ ] `src/config/site.ts` filled in completely — NAP, hours, services, theme, socials
- [ ] Theme preset picked (or custom colours from their logo)
- [ ] Placeholder images replaced with client photos (compressed: squoosh.app or `astro:assets` handles it)
- [ ] Web3Forms access key created for this client and added to config

## 3. Build (days 2–7)
- [ ] All 5 pages populated: Home, Services, About, Contact, +1
- [ ] One page per major service if SEO warrants it (each is its own search term)
- [ ] Click-to-call phone number in header (test it actually dials on mobile)
- [ ] Opening hours correct and rendered on Home + Contact
- [ ] Contact form tested — submission arrives in client's email
- [ ] Privacy + Terms pages generated
- [ ] Real content only — zero lorem ipsum anywhere

## 4. Quality gate (before client sees draft)
- [ ] Checked on a real phone, not just devtools
- [ ] Lighthouse: Performance ≥ 90, SEO ≥ 95, Accessibility ≥ 90
- [ ] Every image has alt text
- [ ] Every page has unique `title` + `description` in frontmatter ("Service Town | Business")
- [ ] LocalBusiness JSON-LD validates: search "schema markup validator" → paste homepage URL
- [ ] All links clicked, no 404s
- [ ] Favicon + social share image (og:image) set

## 5. Client review
- [ ] Draft presented on staging URL (Cloudflare Pages preview deploy)
- [ ] ONE revision round — collect all feedback in a single list before changing anything
- [ ] Written/text sign-off received: "approved to launch"

## 6. Launch (day of)
- [ ] Production deploy on Cloudflare Pages
- [ ] Custom domain connected, HTTPS confirmed (padlock on `https://` and `www` redirect works)
- [ ] DNS: A/CNAME per Cloudflare Pages docs; keep existing MX records untouched (don't kill their email!)
- [ ] UptimeRobot monitor added
- [ ] Form re-tested on production domain
- [ ] Stripe Care Plan subscription activated

## 7. Local SEO (launch week — this is half the value)
- [ ] Google Business Profile claimed & verified
- [ ] GBP: primary + secondary categories, hours, service area, services with descriptions, booking/menu links
- [ ] GBP: 10+ photos uploaded, website linked
- [ ] Review link QR code generated and sent to client ("put it on the counter / add to invoices")
- [ ] Review-request text template given to client
- [ ] NAP identical across: website, GBP, Facebook, True Local, Yellow Pages Online, any industry directories
- [ ] Site submitted in Google Search Console; sitemap submitted; verify indexing after 1 week
- [ ] Bing Places (5 minutes, why not)

## 8. Handover & harvest (week 1–2 after launch)
- [ ] "Your site is live" email: URL, what to expect, how to request changes, what Care Plan covers
- [ ] Google Workspace email set up if requested (their billing, your DNS setup)
- [ ] **Testimonial collected (2-week deadline in agreement — calendar reminder set)**
- [ ] Testimonial + screenshot added to neuforge.io portfolio
- [ ] Footer credit "Website by NeuForge Labs" links to neuforge.io ✓
- [ ] Before/after Lighthouse or Google-ranking screenshot saved for marketing
- [ ] Ask: "Who else do you know that needs this?" (best time to ask is launch week, while they're delighted)

## 9. Care Plan rhythm (ongoing, per client)
- [ ] Monthly: dependency bump + redeploy (5 min), GBP insights screenshot saved
- [ ] Monthly: any content-change requests done within allowance
- [ ] Quarterly: "anything changed — hours, prices, services?" check-in text
- [ ] Log time spent per client — if a client regularly exceeds 30 min/month, that's an upsell conversation, not free work
