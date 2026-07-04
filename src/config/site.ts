/**
 * ============================================================
 *  PER-CLIENT CONFIG — this is the ONLY file you edit per client
 *  (plus swapping images in /public and page copy in /src/pages)
 * ============================================================
 * NAP RULE: name/phone/address here must EXACTLY match the
 * Google Business Profile and every directory listing.
 */

export type Service = { title: string; blurb: string; icon?: string };
export type DayHours = { day: string; hours: string };
export type Testimonial = { quote: string; name: string; suburb?: string };
export type Faq = { q: string; a: string };

export const SITE = {
  // ---- Identity (NAP — must match Google Business Profile exactly) ----
  name: "Smith Plumbing",
  legalName: "Smith Plumbing Pty Ltd",
  tagline: "Fast, honest plumbing across Kyneton & the Macedon Ranges",
  phone: "03 5422 0000",
  phoneHref: "tel:+61354220000",
  email: "hello@smithplumbing.com.au",
  address: {
    street: "12 High Street",
    town: "Kyneton",
    region: "VIC",
    postcode: "3444",
    country: "AU",
  },
  serviceArea: ["Kyneton", "Woodend", "Castlemaine", "Gisborne", "Macedon Ranges"],
  url: "https://www.smithplumbing.com.au",

  // ---- The "question they answer every day" — goes above the fold ----
  heroAnswer: "Yes — we do emergency call-outs, 7 days a week.",

  // ---- Google / schema ----
  gbpReviewLink: "https://g.page/r/XXXXXXXX/review", // from Google Business Profile
  mapEmbedSrc: "", // GBP > Share > Embed a map (iframe src). Leave "" to hide map.
  schemaType: "Plumber", // pick the closest LocalBusiness subtype: Plumber, Electrician, CafeOrCoffeeShop, HairSalon, PhysicalTherapy, Restaurant, LocalBusiness...
  openingHoursSchema: ["Mo-Fr 07:00-17:00", "Sa 08:00-12:00"], // schema.org format

  // ---- Displayed opening hours ----
  hours: [
    { day: "Monday – Friday", hours: "7:00am – 5:00pm" },
    { day: "Saturday", hours: "8:00am – 12:00pm" },
    { day: "Sunday", hours: "Emergency call-outs only" },
  ] satisfies DayHours[],

  // ---- Services (each major one can also become its own page) ----
  services: [
    { title: "Emergency plumbing", blurb: "Burst pipes, blocked drains, no hot water — same-day response across the Macedon Ranges." },
    { title: "Hot water systems", blurb: "Repair and replacement of gas, electric and heat-pump systems, all major brands." },
    { title: "Blocked drains", blurb: "CCTV inspection and high-pressure jetting to fix the blockage, not just the symptom." },
    { title: "Renovations & new builds", blurb: "Complete rough-in and fit-off for bathrooms, kitchens and laundries." },
  ] satisfies Service[],

  // ---- Social proof ----
  testimonials: [
    { quote: "Turned up within the hour on a Sunday and sorted our burst pipe. Can't recommend highly enough.", name: "J. Carter", suburb: "Kyneton" },
    { quote: "Clear quote, tidy work, fair price. Our go-to plumber now.", name: "M. Nguyen", suburb: "Woodend" },
  ] satisfies Testimonial[],

  faqs: [
    { q: "Do you do emergency call-outs?", a: "Yes — 7 days a week across Kyneton and the Macedon Ranges. Call us any time on 03 5422 0000." },
    { q: "Are you licensed and insured?", a: "Fully licensed (VBA Lic. 12345) and insured. Compliance certificates issued for all applicable work." },
    { q: "Do you give free quotes?", a: "Yes, quotes are free and fixed — the price we quote is the price you pay." },
  ] satisfies Faq[],

  // ---- Contact form (web3forms.com — free, no backend) ----
  web3formsKey: "YOUR-WEB3FORMS-ACCESS-KEY",

  socials: {
    facebook: "https://facebook.com/smithplumbing",
    instagram: "",
  },

  // ---- Theme: pick a preset or write custom values ----
  theme: "trade" as keyof typeof THEMES,
};

/**
 * Three starting presets. Colours are CSS custom properties consumed
 * in global.css — add presets as the portfolio grows, or override
 * per-client with values pulled from their logo.
 */
export const THEMES = {
  // Trades: high-contrast, sturdy, call-now energy
  trade: {
    "--bg": "#FAFAF7",
    "--surface": "#FFFFFF",
    "--ink": "#16211F",
    "--muted": "#5A6663",
    "--brand": "#0E5A46",
    "--brand-ink": "#FFFFFF",
    "--accent": "#E8A013",
    "--radius": "6px",
    "--font-display": "'Archivo', 'Arial Black', sans-serif",
    "--font-body": "'Inter', system-ui, sans-serif",
  },
  // Hospitality: warmer, softer, menu-and-hours forward
  hospitality: {
    "--bg": "#FFF9F2",
    "--surface": "#FFFFFF",
    "--ink": "#2B1E16",
    "--muted": "#6E5F53",
    "--brand": "#8C3B1B",
    "--brand-ink": "#FFF9F2",
    "--accent": "#3F6B4F",
    "--radius": "12px",
    "--font-display": "'Fraunces', Georgia, serif",
    "--font-body": "'Inter', system-ui, sans-serif",
  },
  // Health & services: calm, clinical-but-human, booking forward
  care: {
    "--bg": "#F6F9FB",
    "--surface": "#FFFFFF",
    "--ink": "#1B2733",
    "--muted": "#54636F",
    "--brand": "#1F5F8B",
    "--brand-ink": "#FFFFFF",
    "--accent": "#57B8A0",
    "--radius": "10px",
    "--font-display": "'Source Serif 4', Georgia, serif",
    "--font-body": "'Inter', system-ui, sans-serif",
  },
} as const;
