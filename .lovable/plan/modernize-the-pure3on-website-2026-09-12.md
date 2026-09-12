# Modernize the PURE3ON website

Rebuild the existing Wix site (https://www.pure3on.com/) as a fresh, modern web app in Lovable — same content and pages, dramatically better design.

## Current site (verified)

A non-profit, **PURE3ON** — "Engaging. Environmental. Education." — teaching students sustainability through programs and school events. Current design: dated flat light-blue layout, monospace body text, boxed sections.

Pages and content found:
- **Home**: mission statement, "Our Three Pillars" (Engaging / Environmental / Education), Past Events & Upcoming Events (Mellow Mushroom Membership Drive, Chattahoochee Nature Center Meet, Mount Bethel Elementary) with photos
- **Team**: Student Board (Sneha Gupta, Arnav Patil, Siddharth Gupta, Dirgh Kikani, Amy Valero, Janya Gowda, Naren Kumar) with photos, titles, and schools; Adult Board Members (Hollis Hart, Executive Director, and others) with photos, titles, and contact emails

## Build steps

1. **Connect Wix** — link the Wix account via the built-in connector to pull any additional page content, event images, and team photos directly, supplementing what was already read from the public site.
2. **Design direction** — present 3 modern design concepts (rendered previews) based on the current site's content, keeping its blue "water/wave" identity as inspiration; you pick the one to build.
3. **Home page** — modern hero with the mission and tagline, animated Three Pillars section, and a polished events showcase with real event photos.
4. **Team page** — clean team grid with photos, roles, and schools for the Student Board and Adult Board, with contact links.
5. **Modern polish** — smooth scroll animations, mobile-friendly layout, fast loading, search-engine-friendly titles and descriptions, accessible contrast and alt text.
6. **Logo & imagery** — reuse the real PURE3ON logo and event/team photos from the Wix media library; generate supporting nature/ocean imagery where the current site lacks visuals.

## Technical notes

- TanStack Start + React + Tailwind: Home (`/`) and Team (`/team`) routes, shared header/footer in the root layout.
- Content stored in typed data files so text/team members are easy to update later.
- Wix connector called server-side only (never exposing keys to the browser); used only to fetch content during the build — the finished site has no runtime dependency on Wix.
- SEO head metadata (title, description, og tags) per page.

## After the build

You can publish the new site on Lovable and later point your custom domain (pure3on.com) to it — the Wix site stays live until you switch the domain over, so there's no downtime.
