# CLAUDE.md — dmdgreentechrevive.com search visibility project

This file gives Claude (Claude Code or any Claude session working in this repo) the context, rules and task list for making DMD Green Tech Revive easy to find on Google and in AI answers (ChatGPT, Perplexity, Claude, Google's AI summaries).

Read this whole file before changing anything. Work through the tasks in priority order. After each task, summarise what changed and list anything the owner must confirm.

---

## 1. The business (source of truth)

| Field | Value |
|---|---|
| Brand name | DMD Green Tech Revive (also written "DMD Greentech Revive"; pick ONE spelling and use it everywhere) |
| Legal entity | DMD Green Tech Revive Private Limited — `[TODO: owner to confirm]` |
| Parent line on site | "Unit of DMD Gold Prosperity" |
| Address | Office No-01, Amaryllis, Domkhel Rd, Wagholi, Pune, Maharashtra 412207, India |
| Phone / WhatsApp | +91 97631 23699 |
| Email | info@dmdgreentechrevive.com |
| Services | E-waste collection (free pickup in Pune), data sanitization / destruction, IT asset refurbishment, recycling |
| Authorization | MPCB authorization number: `[TODO: owner to supply]` · CPCB registration if any: `[TODO]` |
| Service area | Pune and Pimpri-Chinchwad `[TODO: confirm exact areas served]` |
| Opening hours | `[TODO]` |
| Social | facebook.com/share/18AgGrVk1u · linkedin.com/company/dmd-green-tech-revive-private-limited · instagram.com/dmd.greentechrevive |

**Primary buyer:** IT, admin and facilities managers at Pune companies (IT parks in Hinjewadi, Kharadi, Magarpatta, Viman Nagar, etc.) who need old laptops, servers and electronics collected, data destroyed, and paperwork for their compliance records.
**Secondary buyer:** households in Pune clearing old phones, laptops and appliances.

**Searches we want to win** (none of these show DMD today):
- e-waste recycling Pune
- corporate e-waste disposal Pune / e-waste disposal for offices Pune
- free e-waste pickup Pune
- data destruction / hard drive destruction Pune
- recycle old laptop Pune
- e-waste collection near me (from Wagholi / Kharadi / Hinjewadi)
- authorized e-waste recycler Pune

The name, address and phone (NAP) above must be written **identically** on every page, in structured data, and on every outside listing.

---

## 2. Hard rules

1. **Never invent facts.** No made-up certifications, authorization numbers, client names, testimonials, statistics, prices or awards. Where a real fact is needed and missing, insert a visible `[TODO: owner to confirm — ...]` and list it in your summary.
2. **Existing claims need backing.** Anything the site already claims ("MPCB Verified", "DoD-standard wiping", "10,000+ devices processed", "India's premier") must either be backed by evidence on the page or softened. Flag each one for the owner rather than silently deleting it.
3. **No keyword stuffing.** Write for a busy IT manager. One clear topic per page.
4. **No thin copy-paste location pages.** An area page is allowed only if it carries genuinely unique content (pickup days for that area, local clients, distance/timing). Otherwise do not create it.
5. **Never break URLs.** If a URL must change, add a permanent (301) redirect.
6. **Keep the WhatsApp link, phone number and "Schedule Pickup" path working** on every page.
7. **Plain language.** No jargon on the page itself.
8. Before editing, inspect the repo and confirm the framework. The live site appears to be **Next.js** (`/_next/image` URLs, Google Tag Manager `GTM-NM4SBQ6T`, Meta pixel). Check whether it uses the App Router (`app/`) or Pages Router (`pages/`), and use that router's built-in metadata, sitemap and robots features.
9. Run the build and lint after every task. Do not leave the site in a broken state.

---

## 3. Known problems (found in the October 2026 audit)

| # | Problem | Where |
|---|---|---|
| K1 | `google-site-verification` meta tag holds the placeholder text `your-google-verification-code`, so Search Console was never verified | All pages (shared layout) |
| K2 | Footer "Services" links (E-Waste Collection, Data Sanitization, Refurbishment, Recycling) all point to `#` | Footer component |
| K3 | Footer "Privacy Policy" and "Terms of Service" point to `#` | Footer component |
| K4 | Brochure file is named `DMD Greentech Broucher ..pdf` (typo, spaces, double dot) | `/public` + homepage button |
| K5 | No separate page per service. All four services live on one `/what-we-do` page | Site structure |
| K6 | MPCB authorization number, sample certificate and client proof are not shown anywhere | Home, services |
| K7 | Homepage headline is a slogan ("Reviving Tech, Restoring Nature."). The free-pickup offer only appears in the FAQ | Home hero |
| K8 | Social-share title/description say "India" while page titles say "Pune": inconsistent | Shared metadata |
| K9 | `meta keywords` tag is long and stuffed (Google ignores it) | All pages |
| K10 | Brand spelled two ways: "DMD Green Tech Revive" and "DMD Greentech Revive" | Throughout |
| K11 | No structured data confirmed for the business, FAQ or services | All pages |
| K12 | Hero image is served at up to 3840px wide; check loading speed on mobile | Home hero |
| K13 | DMD does not appear for any target search, even its own brand name | Off-site (owner tasks, section 6) |

---

## 4. Tasks for Claude — in priority order

### P0 · Technical foundations (do first, small and safe)

**T1. Fix Search Console verification (K1)**
- Replace the placeholder with an environment variable, e.g. `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, rendered via the framework's metadata API (`verification: { google: ... }` in App Router).
- If the variable is empty, render **no** tag at all (never a placeholder).
- Add the same pattern for Bing (`msvalidate.01`).
- Done when: no page contains the string `your-google-verification-code`.

**T2. Sitemap and robots**
- Generate `sitemap.xml` listing every real public page with last-modified dates (App Router: `app/sitemap.ts`).
- Generate `robots.txt` that allows crawling and points to the sitemap (App Router: `app/robots.ts`).
- Done when: `/sitemap.xml` and `/robots.txt` load, and every URL in the sitemap returns 200.

**T3. Fix dead links (K2, K3, K4)**
- Point footer service links to the new service pages from T8 (temporarily to `/what-we-do#<section-id>` anchors if T8 isn't done yet; add those `id`s).
- Create `/privacy-policy` and `/terms` pages. Draft plain-language text that matches what the site actually collects (contact form, WhatsApp, Google Tag Manager, Meta pixel). Mark the draft `[TODO: owner/legal review]`.
- Rename the brochure to `/dmd-green-tech-revive-brochure.pdf`, update the button, and add a redirect from the old path.
- Done when: a crawl of the site finds zero `href="#"` links and zero 404s.

**T4. Unique page titles and descriptions**
- Every page gets its own title (≤ 60 characters, main search phrase first, brand last) and description (≤ 155 characters, includes the offer and a reason to click).
- Make social-share (Open Graph / Twitter) text match each page (K8).
- Remove the `keywords` meta tag (K9).
- Suggested homepage title: `Free E-Waste Pickup in Pune for Offices & Homes | DMD Green Tech Revive`

**T5. Structured data (K11)** — output as JSON-LD in the page head
- **Site-wide:** `Organization` + `LocalBusiness` (use the most specific type that fits, e.g. `RecyclingCenter`) with exact NAP from section 1, `geo` coordinates `[TODO]`, `openingHoursSpecification` `[TODO]`, `areaServed`, `logo`, `sameAs` (the three social profiles plus outside listings as they go live).
- **Homepage FAQ:** `FAQPage` built from the same data that renders the visible FAQ (one source, so they never drift).
- **Each service page:** `Service` with `provider` pointing to the business and `areaServed: Pune`.
- **Inner pages:** `BreadcrumbList`.
- Never put facts in structured data that are not visible on the page.
- Done when: every page passes Google's Rich Results Test and Schema.org validator with no errors.

**T6. Speed and mobile (K12)**
- Hero image: correct `sizes` attribute, priority loading, a sensible max width; check the other large images too.
- Every image gets descriptive alt text ("Technician wiping a laptop hard drive at DMD's Wagholi facility", not "image1").
- Check that the main content is in the server-rendered HTML (view-source), not only added by JavaScript.
- Report Lighthouse mobile scores before and after.

**T7. One brand spelling (K10)**
- Use "DMD Green Tech Revive" everywhere (copy, metadata, structured data, alt text). Leave the logo image alone.

### P1 · Pages that match what buyers search for

**T8. One page per service (K5)** — suggested URLs:
- `/services/corporate-e-waste-disposal-pune`
- `/services/data-destruction-pune`
- `/services/laptop-and-it-equipment-recycling-pune`
- `/services/it-asset-refurbishment`
- `/services/household-e-waste-pickup-pune`

Each page must contain:
1. A heading naming the service and Pune.
2. Who it's for, and the problem it solves.
3. The real step-by-step process (pickup → data wiping/destruction → segregation → recycling → paperwork).
4. **What paperwork the customer receives**, with a sample image (`[TODO: owner to supply redacted sample certificate]`).
5. The authorization number (`[TODO]`).
6. What items are accepted (link to `/e-waste-categories`).
7. Price/fee position (free pickup? minimum quantity?) `[TODO: confirm]`.
8. 4–6 questions and answers specific to that service (also as `FAQPage` data).
9. A clear call to action: Schedule Pickup + WhatsApp + phone.
10. Links to two related services.

Keep `/what-we-do` as an overview hub that links to all service pages.

**T9. Rewrite the homepage top section (K7)**
- Headline that states the offer, e.g. "Free e-waste pickup for Pune offices and homes"; sub-line: "Certified data destruction and recycling paperwork for your records."
- Keep "Reviving Tech, Restoring Nature" as a smaller tagline.
- Two buttons: **Office pickup** (form asking company, device count, preferred date) and **Home pickup**.
- Directly below: a proof strip — authorization number, sample certificate link, client logos `[TODO: only with permission]`.

**T10. Compliance & proof page** — `/certifications`
- Authorization details with scans `[TODO]`, the data-destruction method in plain words, a sample certificate, and what the paperwork helps a company show its auditors. Link from footer and every service page.

**T11. Guides that earn search traffic and AI citations** — `/guides/...`
Write 4–6 genuinely useful articles, each citing official sources (E-Waste (Management) Rules 2022, MPCB, CPCB). Ideas:
- How Pune offices should dispose of old laptops and servers (step by step)
- What a company must keep on file when disposing of e-waste
- Wiping vs destroying a hard drive: which one does your company need?
- Where to recycle old electronics in Pune (honest list including municipal drives)
- What happens to a laptop after recycling (with DMD's real process photos)

Rules: facts must be checked against the official text; date each article and show the author; no AI filler; each article links to the relevant service page.

**T12. Clear facts for AI answers**
- On `/about-us`, add a short plain-text "Key facts" block: legal name, founded `[TODO]`, location, authorization, services, area served, contact. AI tools quote pages that state facts plainly.
- Optional: add `/llms.txt` summarising the business and linking to the key pages (low effort; benefit is not proven, so treat as a bonus).

### P2 · Trust and proof

**T13. Testimonials and case studies** — build components ready to display real quotes and 2–3 short case studies (company type, devices collected, what paperwork was delivered). Ship with empty-state handling; populate only with real, permission-approved content.

**T14. Campaign / gallery pages** — turn `/posts` items into individual pages with date, location, quantity collected and photos, so each drive can be found and linked by local news and partners.

---

## 5. Definition of done (check before saying a task is finished)

- Build and lint pass.
- No `href="#"`, no 404s, no placeholder text in rendered pages (other than `[TODO]` items listed in your summary).
- Every page has a unique title, description, one main heading, and valid structured data.
- NAP matches section 1 exactly.
- The summary lists: files changed, URLs added/redirected, and every `[TODO]` the owner must fill.

---

## 6. Owner tasks (outside the code; Claude can draft text for these but cannot do them)

These matter as much as the site work. Today, directories and government lists own the search results.

1. **Google Search Console**: verify the site (after T1), submit the sitemap, request indexing of the homepage and service pages.
2. **Google Business Profile**: create/claim "DMD Green Tech Revive" at the Wagholi address, category "Recycling center" / "Electronics recycling", add services, hours, photos of the facility and trucks, and post every collection drive. Ask every happy customer for a Google review.
3. **Bing Webmaster Tools**: verify and submit the sitemap (ChatGPT search leans on Bing's index).
4. **Directories**, with identical NAP: IndiaMART, Justdial, Sulekha, TradeIndia, Yellow Pages India, LinkedIn company page fully filled in.
5. **MPCB list**: confirm DMD appears correctly on the board's published list of authorized recyclers, with matching name and address.
6. **Earn mentions**: partner with housing societies, IT parks, Pune Municipal Corporation drives, CSR teams; get a link from each partner's site or news item.
7. **Measure monthly**: Search Console clicks and positions for the target searches in section 1; Business Profile calls and direction requests; and re-ask ChatGPT/Perplexity "best e-waste recycler in Pune for offices" to see if DMD gets named.

No one can guarantee a #1 ranking. The aim is to remove every reason Google and AI tools have to skip DMD, then build proof and mentions over the following 3–6 months.

---

## 7. Ready-to-use prompts (one per Claude Code session)

Paste these one at a time. Wait for each to finish and review the summary before the next.

1. `Read CLAUDE.md. Inspect the repo and tell me the framework, router, page list and where metadata, the footer and the FAQ live. Don't change anything yet.`
2. `Do tasks T1, T2 and T3 from CLAUDE.md. Show me the diff summary and the TODO list.`
3. `Do T4 and T7. Show a table of every page with its old and new title and description.`
4. `Do T5. Give me the JSON-LD for the homepage and one inner page so I can test it in Google's Rich Results Test.`
5. `Do T6 and report Lighthouse mobile scores before and after.`
6. `Do T9 (homepage top section). Leave every unknown fact as a [TODO].`
7. `Do T8 for /services/corporate-e-waste-disposal-pune only. I'll review before you build the others.`
8. `Build the remaining service pages from T8 using the approved first page as the pattern, plus T10.`
9. `Draft the first guide from T11: "How Pune offices should dispose of old laptops and servers". Cite official sources and list every fact I need to verify.`
10. `Do T12, T13 and T14.`
11. `Draft my Google Business Profile description, service list and first three posts, using only facts in CLAUDE.md section 1.`
