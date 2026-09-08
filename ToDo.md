# real homies club Development Plan

## 1. Project Goal

Build and improve the official real homies club website based on `Concept.md` and `Design.md`.

The website should:

- Clearly explain what real homies club is.
- Showcase interviews, short-form content, conference coverage, and events.
- Present previous media partnerships and collaborations.
- Connect visitors to TikTok, YouTube, Instagram, and X.
- Make it easy for projects and event organizers to contact real homies club.
- Be easy to maintain and expand as more content is produced.
- Be optimized for mobile, performance, SEO, and AI search discoverability.

The existing website should be improved rather than unnecessarily rebuilt from scratch.

---

## 2. Technical Stack

### Frontend

- Next.js 15.5
- React 19
- TypeScript
- Next.js App Router

### Package Manager

- npm
- Development: `npm install` → `npm run dev`
- Production build: `npm run build`

### Styling

- Keep the existing CSS structure unless there is a clear reason to change it.
- Use `Design.md` as the visual source of truth.
- Do not introduce Tailwind CSS or another UI framework unless necessary.

### Backend

- No separate backend server for the initial version.
- Use Next.js functionality when server-side functionality is required.

### Database

- No database for the initial version.
- Consider adding one later if a CMS or larger content system becomes necessary.

### Content Management

- Initially use structured static/code-based content.
- Separate content/data from UI so a CMS can be introduced later.

### Hosting / Deployment

- Vercel
- GitHub for source control
- `main` branch represents the production-ready version.

### SEO / GEO

- Next.js Metadata
- Semantic HTML
- sitemap.xml
- robots.txt
- Canonical URLs
- Open Graph metadata
- Schema.org structured data
- Clear H1/H2/H3 hierarchy
- Important information must be available as crawlable HTML text.

### Architecture Principles

- Do not rebuild the existing site from scratch.
- Inspect the existing code before making changes.
- Reuse working code where appropriate.
- Separate features and UI into reusable modules.
- Do not introduce new libraries without a clear reason.

---

## 3. Development Principles

Before modifying the website:

1. Read `Concept.md`.
2. Read `Design.md`.
3. Inspect the existing codebase.
4. Understand the current component and CSS structure.
5. Reuse working code where appropriate.
6. Avoid rewriting the entire website unless technically necessary.

---

# 4. Architecture

## 4.1 Global Layout

Responsibilities:

- Global navigation
- Footer
- Global typography
- Global spacing
- Responsive layout
- SEO defaults

Expected structure:

- Header
- Main content
- Footer

Input:

- Navigation items
- Social links
- Contact information

Output:

- Consistent layout across the website

---

## 4.2 Content Data

Content should be separated from UI components where practical.

Create structured data for:

### Conversations / Interviews

Suggested fields:

- title
- project
- person
- event
- thumbnail
- platform
- url
- description
- date

Example structure:

```ts
{
  title: "Interview title",
  project: "Project name",
  person: "Guest name",
  event: "Event name",
  thumbnail: "/images/example.jpg",
  platform: "TikTok",
  url: "https://...",
  description: "Short description",
  date: "2026-09"
}
```

### Work / Partnerships

Suggested fields:

- title
- category
- partner
- location
- date
- image
- description
- relatedContent
- externalUrl

This structure should allow new work and interview items to be added without rewriting the UI.

---
# 5. Implementation Plan

## Phase 1. Existing Project Audit

- [ ] Inspect the current `app/` directory.
- [ ] Inspect existing pages and components.
- [ ] Inspect existing CSS files and identify the current fonts.
- [ ] Inspect files inside `public/`.
- [ ] Identify reusable components.
- [ ] Identify obsolete or duplicated code.
- [ ] Confirm that the existing project runs locally.
- [ ] Run `npm run build` before major modifications.
- [ ] Do not change the design during this phase.

### Test

Run:

`npm install`

`npm run dev`

Check the existing website in the browser.

Then run:

`npm run build`

The existing project should build successfully before major changes begin.

---

## Phase 2. Global Design System

- [ ] Apply the colors defined in `Design.md`.
- [ ] Apply the typography hierarchy.
- [ ] Define consistent heading and body text styles.
- [ ] Apply consistent spacing and section spacing.
- [ ] Define maximum content width.
- [ ] Define link and hover styles.
- [ ] Define responsive breakpoints.
- [ ] Preserve the minimal editorial visual identity.
- [ ] Avoid unnecessary visual effects or animations.

### Test

Check the design on desktop, tablet, and mobile.

Verify that typography, spacing, alignment, and colors remain consistent.

---

## Phase 3. Header & Navigation

- [ ] Preserve or improve the real homies club wordmark.
- [ ] Implement Home navigation.
- [ ] Implement About navigation.
- [ ] Implement Work navigation.
- [ ] Implement Contact navigation.
- [ ] Make navigation responsive.
- [ ] Add appropriate hover and focus states.

### Test

Click every navigation item and verify that it leads to the correct section or page.

---

## Phase 4. Hero Section

Maintain the core brand message:

"Behind every idea. There's a person."

- [ ] Implement the "MEDIA & BEYOND" label.
- [ ] Implement the main headline.
- [ ] Implement supporting copy.
- [ ] Preserve generous whitespace.
- [ ] Preserve existing brand motifs such as REC / :) where appropriate.
- [ ] Ensure the hero works on mobile.
- [ ] Avoid unnecessary animation.

### Test

Check desktop, tablet, and mobile.

The headline must not overflow or break awkwardly.

---

## Phase 5. About Section

- [ ] Clearly explain what real homies club is.
- [ ] Explain the people-first editorial philosophy.
- [ ] Keep the section concise.
- [ ] Use editorial typography rather than card-heavy UI.
- [ ] Keep important descriptions as crawlable HTML text.

### Test

A first-time visitor should be able to understand what real homies club is, what it covers, and why it exists.

---

## Phase 6. What We Do

Maintain three primary areas:

### 01 Conference Media

- Interviews
- Conference coverage
- Short-form content

### 02 Events & Community

- Community gatherings
- Event collaborations
- On-site coverage

### 03 Media Brand

- Short-form Web3 content
- Social distribution
- Interviews and stories

Tasks:

- [ ] Implement numbered categories.
- [ ] Add category headlines.
- [ ] Add short descriptions.
- [ ] Add relevant links.
- [ ] Keep the layout editorial rather than card-heavy.
- [ ] Make the section responsive.

---

## Phase 7. Selected Work / Partnerships

- [ ] Create structured work data.
- [ ] Build reusable work components.
- [ ] Add existing conference and media partnership examples.
- [ ] Display event imagery.
- [ ] Add project links where available.
- [ ] Allow new work to be added through data rather than rebuilding UI components.

### Test

Add one temporary work item.

Verify that it appears correctly, then remove the temporary item.

---

## Phase 8. Featured Conversations / Content

- [ ] Create structured conversation/content data.
- [ ] Display thumbnails.
- [ ] Display project, team, or person information when available.
- [ ] Display event information when relevant.
- [ ] Display platform information.
- [ ] Link to original TikTok, YouTube, Instagram, or X content.
- [ ] Make external links open safely.
- [ ] Ensure thumbnails work responsively.

### Test

Check multiple content entries and verify the thumbnail, title, platform, and external link.

---

## Phase 9. Contact

Maintain the primary message:

"Have a story worth telling?"

- [ ] Display the primary contact message.
- [ ] Display `hello@realhomies.club`.
- [ ] Make the email address clickable.
- [ ] Add social links.
- [ ] Keep the contact experience simple.
- [ ] Do not build a backend contact system unless required.

### Test

Verify the email link and every social link.

---

## Phase 10. Footer

- [ ] Display real homies club branding.
- [ ] Add social links where appropriate.
- [ ] Add copyright information.
- [ ] Keep the footer minimal.
- [ ] Verify the mobile layout.

---

# 6. SEO

- [ ] Create site-wide metadata.
- [ ] Create descriptive page titles and meta descriptions.
- [ ] Configure canonical URLs.
- [ ] Configure Open Graph metadata.
- [ ] Configure social sharing images.
- [ ] Create `sitemap.xml`.
- [ ] Create `robots.txt`.
- [ ] Verify heading hierarchy.
- [ ] Ensure each page has an appropriate H1.
- [ ] Add descriptive image alt text.
- [ ] Check internal and external links.

The goal is to make the website technically understandable and discoverable by search engines. Search ranking should not be assumed or promised.

---

# 7. GEO / AI Search Discoverability

- [ ] Clearly describe real homies club in HTML text.
- [ ] Clearly associate real homies club with blockchain/Web3 media.
- [ ] Clearly describe interviews, conference coverage, media partnerships, and events.
- [ ] Use consistent names for organizations, events, projects, and people.
- [ ] Give important projects and collaborations descriptive text rather than image-only presentation.
- [ ] Evaluate Schema.org `Organization` structured data.
- [ ] Evaluate `Event` structured data where appropriate.
- [ ] Evaluate `Person` structured data where appropriate.
- [ ] Evaluate `VideoObject` structured data where appropriate.
- [ ] Ensure structured data matches visible page content.

Avoid keyword stuffing.

---

# 8. Performance

- [ ] Use Next.js image optimization where appropriate.
- [ ] Optimize large image files.
- [ ] Avoid unnecessary JavaScript.
- [ ] Avoid unnecessary third-party libraries.
- [ ] Avoid automatically loading heavy video embeds.
- [ ] Prefer thumbnails linking to external platforms where appropriate.
- [ ] Check mobile loading performance.

---

# 9. Accessibility

- [ ] Use semantic HTML.
- [ ] Add image alt text.
- [ ] Ensure links have understandable labels.
- [ ] Ensure keyboard navigation works.
- [ ] Add visible focus states.
- [ ] Check basic text/background contrast.
- [ ] Avoid interactions that only work with hover.

---

# 10. Responsive QA

### Mobile

- [ ] Navigation
- [ ] Hero
- [ ] Typography
- [ ] Images
- [ ] Work
- [ ] Conversations
- [ ] Contact
- [ ] Footer

### Tablet

- [ ] Layout
- [ ] Typography
- [ ] Spacing
- [ ] Images

### Desktop

- [ ] Maximum content width
- [ ] Section spacing
- [ ] Image quality
- [ ] Alignment
- [ ] Hover interactions

No horizontal scrolling should occur.

---

# 11. Final QA

- [ ] Run `npm run build`.
- [ ] Fix all build errors.
- [ ] Check the browser console for errors.
- [ ] Check all internal links.
- [ ] Check all external links.
- [ ] Check all social links.
- [ ] Check the email link.
- [ ] Check images.
- [ ] Check metadata.
- [ ] Check sitemap.
- [ ] Check robots.txt.
- [ ] Check structured data.
- [ ] Check mobile layout.
- [ ] Check desktop layout.
- [ ] Check basic accessibility.
- [ ] Check loading performance.

---

# 12. Deployment Workflow

Development should be performed in small modules.

1. Create a branch for a specific feature.
2. Implement one module or related group of tasks.
3. Run the website locally.
4. Test the feature.
5. Run `npm run build`.
6. Commit the completed module.
7. Push the branch to GitHub.
8. Check the Vercel preview deployment.
9. Merge into `main` after verification.
10. Verify the production website.

Avoid combining unrelated large changes into one commit.

---

# 13. Future Features

Do not implement these during the initial build unless specifically requested.

- Content search
- Content categories
- Dedicated interview pages
- Dedicated project pages
- Dedicated conference coverage pages
- Blog / news
- Media kit
- Sponsorship package page
- Newsletter
- Multilingual support
- CMS
- Admin dashboard
- Database
- Event calendar

The initial architecture should make these additions possible without requiring a complete rebuild.

---

# Definition of Done

The first version is complete when a visitor can:

1. Understand what real homies club is.
2. Understand what real homies club does.
3. View representative work and partnerships.
4. Discover interviews and content.
5. Visit real homies club social channels.
6. Contact real homies club for collaboration.

The website must also:

- Work on mobile and desktop.
- Build successfully.
- Be deployed successfully on Vercel.
- Follow `Concept.md`.
- Follow `Design.md`.
- Have basic SEO and structured content implemented.
