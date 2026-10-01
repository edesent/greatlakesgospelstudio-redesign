# Great Lakes Gospel Studio

A standalone Next.js redesign for Stephen Forester’s Christian recording studio in Lapeer, Michigan. Built alongside the Forester Ministries project, with a dedicated studio identity: warm ivory, charcoal, copper, condensed display typography, and real studio photography.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3042.

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

The project has its own dependencies and configuration. No CRM environment variables or ministry project credentials are needed.

## Content and features

- Responsive studio homepage with services, recordings, equipment, producer biography, testimonial, pricing, and project inquiries.
- Filterable project collection with the original studio’s YouTube demos. Selecting a project opens a keyboard-accessible video dialog. Videos load only after a visitor selects one; the dialog uses YouTube’s privacy-enhanced embed domain and offers a direct YouTube fallback.
- Three-image studio gallery, studio tour video, expandable pricing explanation, mobile navigation, reduced-motion support, and a skip link.
- The inquiry form validates required fields and opens a prefilled email to `greatlakesgospelstudio@yahoo.com`. Visitors must send that email themselves. This is intentionally not a server-submitted contact form; it does not store information or claim that a message has been delivered.
- Published prices are displayed with a note to confirm final scope and pricing with Stephen. Additional musicians and services need a separate quote.

## Editing

- `src/components/studio.tsx`: page sections, navigation, project data, gallery, inquiry form, and video dialog.
- `src/app/globals.css`: responsive layout, colors, typography, and animation.
- `src/app/layout.tsx`: fonts, title, description, and social metadata.
- `public/images/`: optimized studio and producer photography.

The four project cover treatments are presentation graphics made with studio photographs and project names; they are not reproductions of the artists’ official album packaging. Their play buttons open the actual demo videos.

## Sources

Content and media were reviewed October 1, 2026:

- https://www.greatlakesgospelstudio.com/ — original photography, location, studio introduction, tour video, and testimonial.
- https://www.greatlakesgospelstudio.com/staff_and_partners — Stephen’s biography and collaborator information.
- https://www.greatlakesgospelstudio.com/about — equipment.
- https://www.greatlakesgospelstudio.com/song_demos — original project titles, artists, and video IDs.
- https://www.greatlakesgospelstudio.com/prices — studio time, custom soundtrack rates, mastering, and time estimates.
- https://www.greatlakesgospelstudio.com/contact — studio phone and email.
- Local `../foresterministries-redesign/`, corresponding to https://github.com/edesent/foresterministries-redesign — Stephen’s portrait and related ministry branding reference.

## Deployment

- Preview website: https://greatlakesgospelstudio.elijahdesent.com
- GitHub: https://github.com/edesent/greatlakesgospelstudio-redesign (private)
- Vercel project: `greatlakesgospelstudio-redesign`, under `elijah-desents-projects`.
- Production branch: `main`.

This publishes the current design draft. The original studio website remains unchanged. Content parity and the next visual revision are still outstanding: the current draft has four of seven demos, a shortened biography and equipment overview, one testimonial excerpt, and core pricing. The original session gallery, additional profiles/testimonials, and detailed ancillary pricing still need migration.
