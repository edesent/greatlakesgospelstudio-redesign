import type { NextConfig } from "next";

/**
 * Legacy redirects from the original WebStarts site
 * (www.greatlakesgospelstudio.com). Do not remove these when the domain moves
 * to this project: they keep old bookmarks, Google results, and links from
 * other sites working. See "Legacy redirects" in README.md.
 *
 * The old site served each page at a bare lowercase path (/prices) and
 * 301-redirected the `.html` form listed in its sitemap (/prices.html) to it,
 * so both spellings are covered. The old server was case-sensitive (only
 * lowercase worked); Next.js matches redirect sources case-insensitively, so
 * stray capitalised links (/Prices, /About.html) are caught too. A trailing
 * slash is stripped by Next.js first (/prices/ -> /prices -> /pricing).
 */
const legacyPages: [string, string][] = [
  ["index", "/"],
  ["song_demos", "/#listen"],
  ["contact", "/#contact"],
  ["about", "/equipment"], // old nav label: "Studio Equipment"
  ["staff_and_partners", "/team"],
  ["prices", "/pricing"],
  ["session_pics_3", "/sessions"],
  ["testimonials_2", "/testimonials"],
];

const legacyRedirects = legacyPages.flatMap(([page, destination]) => [
  { source: `/${page}`, destination, permanent: true },
  { source: `/${page}.html`, destination, permanent: true },
]);

const config: NextConfig = {
  turbopack: { root: process.cwd() },
  async redirects() {
    return legacyRedirects;
  },
};
export default config;
