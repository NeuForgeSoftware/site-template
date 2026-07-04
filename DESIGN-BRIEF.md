# DESIGN-BRIEF.md — Client mockup template for Claude Design

Purpose: turn 30 minutes of research into the interactive homepage mockup
you hand them on your phone in minute 4-7 of the sit-down. Fill in every
[bracket] before prompting — the specifics ARE the quality. Keep a copy
per client: `brief-[businessname].md`.

Two modes:
- PRE-MEETING (before doorstep/sit-down): fill this from public info —
  their Google listing, Facebook, old website, a walk past the shopfront.
- POST-DISCOVERY (before build): update it with their actual answers,
  then reuse for the real build direction.

---

## Research checklist (do this first, ~30 min)

- [ ] Their Google Business Profile: category, hours, reviews (steal
      exact phrases customers use — best copy you'll ever get)
- [ ] Their Facebook/Instagram: grab 2-3 real photos, note their tone
- [ ] Old website if any: note what's broken AND anything worth keeping
- [ ] Logo: exists? Colours in it? (screenshot it for upload)
- [ ] Top competitor in town: what does theirs look like?
- [ ] The likely "question they answer every day" (guess from reviews
      — confirm in discovery)

---

## The prompt (paste into Claude Design, brackets filled)

> Design a homepage mockup for [BUSINESS NAME], a [WHAT THEY ARE — e.g.
> family-run plumbing business / cafe / physio clinic] in [TOWN],
> Victoria, Australia.
>
> AUDIENCE: [WHO — e.g. local homeowners with an urgent problem /
> weekend visitors looking for lunch / people in pain searching
> "physio near me"]. They arrive on a phone, mid-task. Their one job
> on this page: [THE ACTION — call now / see the menu and hours /
> book an appointment].
>
> ABOVE THE FOLD, NON-NEGOTIABLE:
> - Business name and what they are, instantly clear
> - [TOWN] visible — this is a local business
> - Click-to-call button with [PHONE NUMBER]
> - The answer to their most common question: "[THE EVERYDAY QUESTION
>   ANSWER — e.g. Yes, we do emergency call-outs 7 days / Open 7am-3pm
>   daily, dogs welcome / No referral needed]"
>
> SECTIONS BELOW: [PICK 3-4 — services grid / menu highlights / opening
> hours / reviews (use these real quotes: "..." ) / photo of the team
> or premises / service area / simple booking CTA]
>
> FEEL: [3 ADJECTIVES A CUSTOMER WOULD USE — e.g. reliable, no-nonsense,
> local / warm, relaxed, welcoming / calm, professional, caring].
> This is a real [TOWN] business, not a startup — no tech clichés, no
> stock-photo gloss, no marketing buzzwords in the copy.
>
> COLOURS: [pull from their logo: #XX, #XX / or describe: "the deep red
> of their shopfront awning" / or if nothing exists: "propose something
> honest for a [TRADE] — high contrast, sturdy"]. Uploaded: their logo
> and [N] real photos — use these, not stock.
>
> COPY: plain Australian English, their voice: [FORMAL/CASUAL — mirror
> how they write on Facebook]. Use their real details: hours [HOURS],
> address [ADDRESS], services [TOP 3-4 SERVICES].
>
> MOBILE-FIRST — I will present this on a phone. Make the call button
> impossible to miss.

---

## Iteration pass (after first version)

Quick refinements that usually earn their keep:
- "Make the phone number bigger — it's the whole point"
- "The [X] section feels corporate, rewrite in the voice of the owner"
- "Try the hero with their real photo instead of the illustration"
- "Show me one alternative direction, warmer/sturdier" (one alternative,
  not five — this is a mockup, protect your usage quota)

STOP when it would make a shop owner say "that's us." Do not polish
past that point — reactions and corrections in the meeting are the
goal, and a too-finished mockup invites nitpicking instead of "yes".

---

## After the meeting (if they sign)

1. Update this brief with their discovery answers (real everyday
   question, services in their words, review quotes they're proud of)
2. Send the handoff bundle to Claude Code with:
   > "Implement this design's decisions — palette, type feel, section
   > order, signature element — as config values and copy in our
   > existing Astro template (src/config/site.ts + components). Do NOT
   > replace the template's architecture or paste the mockup's HTML.
   > Anything generic and better than the template: flag it as a
   > merge-back candidate."
3. Pick the nearest theme preset (trade/hospitality/care) and override
   its colours with the mockup's palette in site.ts.

---

## Worked example (fictional — the Kyneton plumber)

> Design a homepage mockup for Smith Plumbing, a family-run plumbing
> business in Kyneton, Victoria, Australia.
>
> AUDIENCE: local homeowners with an urgent problem — burst pipe, no
> hot water. They arrive on a phone, stressed. Their one job: call now.
>
> ABOVE THE FOLD: business name + "Plumber" instantly clear; Kyneton
> visible; click-to-call 03 5422 0000; the answer: "Yes — emergency
> call-outs, 7 days a week."
>
> SECTIONS: services grid (emergency, hot water, blocked drains,
> renovations); reviews with real quotes: "Turned up within the hour
> on a Sunday"; service area (Kyneton, Woodend, Castlemaine, Gisborne);
> hours.
>
> FEEL: reliable, no-nonsense, local. Real Kyneton tradie, not a
> franchise — no stock-photo gloss.
>
> COLOURS: deep green and safety-vest gold from their van signage.
> Uploaded: logo + 3 photos of Dave and the van.
>
> COPY: plain, casual-but-competent, like Dave talks on Facebook.
> MOBILE-FIRST — giant call button.
