"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Phone, Play, X } from "lucide-react";
import { Brand, VideoDialog, type VideoItem } from "./studio";

const links = [
  ["The Studio", "/#studio"],
  ["Our Work", "/#listen"],
  ["Team", "/team"],
  ["Sessions", "/sessions"],
  ["Pricing", "/pricing"],
];

const footerLinks = [
  ["Song demos", "/#listen"],
  ["Staff & partners", "/team"],
  ["Equipment", "/equipment"],
  ["Session photos", "/sessions"],
  ["Testimonials", "/testimonials"],
  ["Pricing", "/pricing"],
];

function Header() {
  const [menu, setMenu] = useState(false);
  const path = usePathname();
  useEffect(() => {
    if (!menu) return;
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [menu]);
  return (
    <header className="header">
      <div className="nav-wrap">
        <Brand href="/" />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link
              href={href}
              key={href}
              aria-current={path === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link className="button dark nav-cta" href="/#contact">
          Start a project <ArrowUpRight size={17} />
        </Link>
        <button
          id="menu-toggle"
          className="menu-toggle icon-button"
          aria-label={menu ? "Close menu" : "Open menu"}
          aria-expanded={menu}
          aria-controls="mobile-menu"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </div>
      {menu && (
        <nav
          id="mobile-menu"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {[...links, ["Start a project", "/#contact"]].map(([label, href]) => (
            <Link href={href} key={href} onClick={() => setMenu(false)}>
              {label}
              <ArrowUpRight size={20} />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function PageShell({
  eyebrow,
  title,
  accent,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  intro: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section className="page-hero">
          <div className="container page-hero-inner">
            <p className="eyebrow section-label">
              <span className="status-dot" /> {eyebrow}
            </p>
            <h1>
              {title}
              <br />
              <span>{accent}</span>
            </h1>
            <div className="page-hero-intro">{intro}</div>
          </div>
        </section>
        {children}
        <section className="page-cta">
          <div className="container page-cta-inner">
            <h2>
              YOU HAVE A SONG.
              <br />
              <span>LET’S HEAR IT.</span>
            </h2>
            <div>
              <p>
                To learn more, or to schedule a recording session at GLGS,
                contact Stephen Forester, owner, producer, and recording
                engineer.
              </p>
              <div className="page-cta-actions">
                <Link className="button copper" href="/#contact">
                  Start a project <ArrowUpRight size={18} />
                </Link>
                <a className="text-button" href="tel:+18103580518">
                  <span className="play-ring">
                    <Phone size={12} />
                  </span>
                  (810) 358-0518
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <Brand href="/" />
            <nav className="footer-links" aria-label="Footer navigation">
              {footerLinks.map(([label, href]) => (
                <Link href={href} key={href}>
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Great Lakes Gospel Studio</p>
            <span>Christian music. Crafted in Michigan.</span>
            <a
              href="https://www.foresterministries.com"
              target="_blank"
              rel="noreferrer"
            >
              Stephen Forester Ministries <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export function SectionHeading({
  label,
  title,
  accent,
  aside,
}: {
  label: string;
  title: string;
  accent: string;
  aside?: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow section-label">{label}</p>
        <h2>
          {title}
          <br />
          <span className="serif">{accent}</span>
        </h2>
      </div>
      {aside && <p>{aside}</p>}
    </div>
  );
}

export function TourButton() {
  const [video, setVideo] = useState<VideoItem | null>(null);
  return (
    <>
      <button
        className="underlink"
        onClick={() =>
          setVideo({
            id: "nlOYpwAS8Jg",
            title: "Inside Great Lakes Gospel Studio",
          })
        }
      >
        Take the studio tour <Play size={15} />
      </button>
      {video && <VideoDialog video={video} close={() => setVideo(null)} />}
    </>
  );
}
