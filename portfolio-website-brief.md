# Software Engineer Portfolio — Build Brief

A working spec you can hand to an AI coding agent. Fill in the bracketed placeholders with your real info before running it.

---

## 1. Purpose & Audience

State this explicitly at the top of the prompt you give your agent — it changes every design decision downstream:

- **Primary audience**: hiring managers / recruiters skimming in under 60 seconds, and engineers doing a deeper technical read.
- **Primary goal**: get someone to (a) understand what you're capable of, (b) see proof, (c) contact you or open your resume/GitHub.
- **Secondary goal**: it doubles as a living record of your work — something you're proud to link in a bio.

---

## 2. Content that can't go missing

- **Name + one-line positioning** — not just "Software Engineer," but what kind: e.g. "Backend engineer focused on distributed systems" or "Full-stack, ships fast, likes messy data problems." Specific beats generic.
- **Short bio** (2–4 sentences) — who you are, what you work on, what you care about. Written like a person, not a LinkedIn summary.
- **Projects section** — the core of the site. For each project:
  - Name + one-sentence description of *what it does and for whom*
  - Your role and what you specifically built (not just "worked on")
  - Tech stack used
  - The interesting problem or constraint you solved — this is what engineers actually read for
  - Links: live demo, GitHub repo, or both
  - Visual: screenshot, short screen-recording GIF, or architecture diagram
- **Work experience** — company, role, dates, and 1–2 outcome-focused bullets per role (impact, not duties).
- **Skills/stack** — grouped logically (languages, frameworks, infra/tools), not a giant flat tag cloud.
- **Contact method** — email at minimum. A contact form is optional and often unnecessary friction; `mailto:` link is fine.
- **Resume download** (PDF) — recruiters will look for this specifically.
- **Links to GitHub / LinkedIn** (and X, blog, etc. if relevant).
- **Favicon + page title + meta description** — easy to forget, matters for sharing/SEO.

### Nice-to-haves, not required
- Blog or writing samples, if you write technically.
- Testimonials/recommendations from colleagues or managers.
- "Now" section (what you're currently learning/building).
- Uptime/uses page (tools you use) — some engineers enjoy this, it's optional flavor.

---

## 3. Design guidelines

- **Ground it in you, not a template.** Before styling anything, decide: what's the one true thing about how you work or think that the whole page should reflect? (e.g. methodical and clean, or scrappy and experimental, or data-dense and technical.) Let that pick the palette and type — don't default to generic "modern SaaS" look.
- **Avoid the current AI-generated-site tells**, since these will make it look templated:
  - Warm cream background + serif headline + terracotta/clay accent (this is an especially recognizable "AI made this" signal right now)
  - Everything in identical rounded cards with the same soft drop-shadow
  - All-caps tracked-out eyebrow labels above every section heading
  - Arrows appended to every link/button ("View project →")
  - Numbered markers (01 / 02 / 03) on content that isn't actually sequential
- **Type**: pick 1–2 typefaces deliberately, not defaults. Keep body line length under ~80 characters. Use type weight/size for hierarchy, not color alone.
- **Color**: define a small, deliberate palette (4–6 colors: background, text, 1–2 accents, borders/muted). Make sure contrast passes accessibility checks.
- **Motion**: minimal and purposeful. One nice load-in or scroll-reveal moment is plenty — not fade-up animations on every single section and hover-lift on every card.
- **Structure over decoration**: use dividers, spacing, and alignment to organize content, not for decoration's sake.
- **Mobile-first**: a huge share of recruiter traffic is a phone tap from a resume PDF or LinkedIn. Test it at 375px width before anything else.
- **Fast**: no huge hero videos or unoptimized images. Compress everything. This is a page that needs to load in under 2 seconds.
- **Accessible**: visible keyboard focus states, sufficient contrast, alt text on images, respects `prefers-reduced-motion`.

---

## 4. General functionality

- **Single-page or lightweight multi-page** — for most portfolios, one scrollable page (Hero → About → Projects → Experience → Contact) is enough and easier to navigate than multiple routes. Use a multi-page setup only if you have enough content (e.g. a blog) to justify it.
- **Sticky/anchor nav** with smooth scroll to sections.
- **Project detail** — either expandable inline (accordion/modal) or separate case-study pages if you want to go deep on 2–3 flagship projects.
- **Dark/light mode toggle** — optional, nice touch, not essential.
- **Responsive layout** tested at common breakpoints (375px, 768px, 1440px).
- **SEO basics**: proper meta tags, Open Graph tags (so it looks good when shared on LinkedIn/Twitter), semantic HTML.
- **Analytics** (optional) — lightweight, privacy-respecting (e.g. Plausible or Vercel Analytics) if you want to know if anyone's visiting.
- **Deployment**: static site deployed on Vercel, Netlify, GitHub Pages, or Cloudflare Pages — all free and simple for this use case.

---

## 5. Suggested tech approach

Keep it simple — this is a resume, not a product. Overengineering it is a common trap (and also a subtle way of showing off, which can read wrong).

- **Simplest**: plain HTML/CSS/JS, or a static site generator (Astro, 11ty). Fast, no build complexity, deploys anywhere.
- **If you want to show React/framework skill**: Next.js or Astro with React islands — reasonable if your target roles are frontend-heavy.
- **Content management**: keep project data in a simple JSON/YAML/Markdown file rather than hardcoding it in components — makes it trivial to add new projects later.
- Avoid pulling in a CMS, database, or backend unless you have a specific reason (e.g. a real contact form with storage, or a blog with many posts).

---

## 6. Inspiration approach (rather than specific sites)

Instead of copying a specific portfolio, look at a range of engineer portfolios and note what you *personally* find clear and credible vs. what feels like noise — then make deliberate choices, not a mashup. Good instinct-checks:

- Would a recruiter understand what you do in 10 seconds?
- Would an engineer at your target company find something technically substantive to read?
- Does it look like *you* built it, not like it was generated from a template?

---

## 7. How to use this with your agent

Paste this whole doc into your agent along with:
1. Your actual bio, project list, and experience (even rough notes are fine — ask the agent to tighten the copy).
2. Any strong personal preferences (colors you like/hate, a style reference, monospace vs. serif, etc.).
3. Your tech stack preference from Section 5, or ask the agent to recommend one based on your target roles.

Then ask it to first propose a design plan (palette, type, layout, one clear point of view) before writing any code — review that plan before it builds, so you're not stuck reworking a full page later.
