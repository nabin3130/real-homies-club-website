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
