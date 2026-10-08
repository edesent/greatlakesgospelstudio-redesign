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

The site has full content parity with the original WebStarts site (migrated October 8, 2026). Every page of the old site has a home here:

| Page | Content |
| --- | --- |
| `/` | Studio introduction, services, all **seven** song demos, the previous-clients list, studio gallery and tour video, producer introduction, a featured testimonial, core pricing, and the project inquiry form. |
| `/team` | Stephen’s full biography and all five partner profiles (Eli Fortner, Rob Novell, Paul Thompson, David Johnson, Maria Grigoryeva), with their own photos. |
| `/equipment` | The complete software and hardware list, grouped, with studio photography and the tour video. |
| `/pricing` | Studio time, custom soundtracks, mastering (and the “mastering is not optional” policy), every session musician’s rates, live string/brass orchestrations, CD duplication through Moonlight Duplication Studio, and PayPal note. |
| `/testimonials` | All eleven client testimonials, in full, plus the previous-clients list. |
| `/sessions` | All 37 session photos from the old “Session Pics” page, in a masonry grid with a keyboard-accessible lightbox. |

- Content lives in `src/components/content.ts` (demos, clients, testimonials, team, equipment, session photos). The studio’s wording is kept; only spelling was corrected (“diligently”, “except”, “Sennheiser”, “Behringer”, “Great Lakes”).
- Six demos are YouTube videos (IDs verified with YouTube oEmbed on October 8, 2026). Grace Arnswald’s “Simply Grace” was never on YouTube: the old site hosted a 194 MB UHD file on WebStarts, so it is re-encoded to 720p (8 MB) at `public/media/grace-arnswald-simply-grace.mp4`. Videos load only after a visitor selects one; YouTube plays through the privacy-enhanced embed domain with a direct fallback link.
- The inquiry form validates required fields and opens a prefilled email to `greatlakesgospelstudio@yahoo.com`. Visitors must send that email themselves. This is intentionally not a server-submitted contact form; it does not store information or claim that a message has been delivered.
- Published prices are displayed with a note to confirm final scope and pricing with Stephen.
- Not migrated, on purpose: the old Michigan-shaped “GLGS” logo graphic (replaced by the new brand), the Avid “Pro Tools Studio” product graphic, the dark template background, and a stock bass-guitar photo (`guitar.webp`, which an earlier draft used as the Mercy Revealed cover; replaced with the studio’s own guitar photograph).

## Photos

All photos are the studio’s own, downloaded from the old site’s original uploads (WebStarts serves `-wNNN-o` resized variants; the file without that suffix is the original) and converted to WebP without upscaling. Several are small at the source and are displayed small on purpose: partner portraits for David Johnson (238 px, recropped from a baked-in circle), Maria Grigoryeva (232 px), and Paul Thompson (392 px), and four 480 px Stronghold Quartet session photos. Ask Stephen for larger originals if he has them. Alt text describes what each photo shows; people are named only when the old site’s file names identified them.

## Legacy redirects

`next.config.ts` holds a `legacyPages` list that 308-redirects every URL of the old WebStarts site. Keep it when the domain moves to this project and when editing the config: these keep Google results, bookmarks, and links from other sites working.

| Old URL (bare and `.html`) | New page |
| --- | --- |
| `/index` | `/` |
| `/song_demos` | `/#listen` |
| `/contact` | `/#contact` |
| `/about` (“Studio Equipment”) | `/equipment` |
| `/staff_and_partners` | `/team` |
| `/prices` | `/pricing` |
| `/session_pics_3` | `/sessions` |
| `/testimonials_2` | `/testimonials` |

The old sitemap listed the `.html` forms; the old server 301’d those to the bare paths, so both are mapped. Next.js matches sources case-insensitively and strips trailing slashes before redirecting, which covers the other spellings.

## Editing

- `src/components/content.ts`: demos, clients, testimonials, team, equipment, and session photo lists.
- `src/components/studio.tsx`: homepage sections, navigation, gallery, inquiry form, and video dialog.
- `src/components/page-shell.tsx`: header, hero, closing call to action, and footer for the subpages.
- `src/components/session-gallery.tsx`: session photo grid and lightbox.
- `src/app/*/page.tsx`: the subpages.
- `src/app/globals.css`: responsive layout, colors, typography, and animation.
- `src/app/layout.tsx`: fonts, title, description, and social metadata.
- `public/images/`: studio, team (`team/`), and session (`sessions/`) photography. `public/media/`: self-hosted demo video.

The project cover treatments are presentation graphics made with studio photographs and project names; they are not reproductions of the artists’ official album packaging. Their play buttons open the actual demo videos.

## Sources

Content and media were reviewed October 1, 2026, and fully migrated October 8, 2026:

- https://www.greatlakesgospelstudio.com/ — original photography, location, studio introduction, tour video, and testimonial.
- https://www.greatlakesgospelstudio.com/staff_and_partners — Stephen’s biography and collaborator information.
- https://www.greatlakesgospelstudio.com/about — equipment.
- https://www.greatlakesgospelstudio.com/song_demos — original project titles, artists, video IDs, client list, and demo testimonials.
- https://www.greatlakesgospelstudio.com/session_pics_3 — session photographs.
- https://www.greatlakesgospelstudio.com/testimonials_2 — client testimonials.
- https://www.greatlakesgospelstudio.com/prices — studio time, custom soundtracks, mastering, session musicians, live strings, and CD duplication.
- https://www.greatlakesgospelstudio.com/contact — studio phone and email.
- Local `../foresterministries-redesign/`, corresponding to https://github.com/edesent/foresterministries-redesign — Stephen’s portrait and related ministry branding reference.

## Deployment

- Preview website: https://greatlakesgospelstudio.elijahdesent.com
- GitHub: https://github.com/edesent/greatlakesgospelstudio-redesign (private)
- Vercel project: `greatlakesgospelstudio-redesign`, under `elijah-desents-projects`.
- Production branch: `main`.

This publishes the current design draft. The original studio website remains unchanged. Content parity with the original site is complete (see “Content and features”); the new subpages still need adding to the sitemap when the domain moves.

## Contact form

The project inquiry form posts to `src/app/api/form/route.ts`, which emails
Stephen through Resend (from `contact@elijahdesent.com`, reply-to the visitor).
Settings live in Vercel, never in the code: `RESEND_API_KEY`, `FORM_TO`
(currently greatlakesgospelstudio@yahoo.com) and `FORM_SECRET`. No email
address is printed on the site, on purpose (harvested addresses get spam);
"Send Stephen a message" links to the form. The site's real address is in
`src/lib/site.ts` and drives the sitemap, robots and social previews.
