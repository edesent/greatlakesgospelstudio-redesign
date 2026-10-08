"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Headphones,
  Mail,
  MapPin,
  Menu,
  Mic2,
  Music2,
  Phone,
  Play,
  SlidersHorizontal,
  X,
} from "lucide-react";

import { clients, projects, type Project } from "./content";

export type VideoItem = {
  id: string;
  title: string;
  file?: string;
  poster?: string;
};

export function videoFor(project: Project): VideoItem {
  return {
    id: project.video ?? project.key,
    title: `${project.artist} — ${project.title}`,
    file: project.file,
    poster: project.poster,
  };
}

const links = [
  ["The Studio", "#studio"],
  ["Our Work", "#listen"],
  ["Team", "/team"],
  ["Sessions", "/sessions"],
  ["Pricing", "/pricing"],
];

export function Soundmark({ className = "" }: { className?: string }) {
  return (
    <span className={`soundmark ${className}`} aria-hidden="true">
      {[12, 23, 35, 47, 36, 23, 12].map((h, i) => (
        <i key={i} style={{ height: h }} />
      ))}
    </span>
  );
}

export function Brand({ href = "#home" }: { href?: string }) {
  return (
    <a
      className="brand"
      href={href}
      aria-label="Great Lakes Gospel Studio home"
    >
      <Soundmark />
      <span>
        GREAT LAKES<small>GOSPEL STUDIO</small>
      </span>
    </a>
  );
}

export function VideoDialog({
  video,
  close,
}: {
  video: VideoItem;
  close: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const element = dialog.current;
    const active = document.activeElement as HTMLElement | null;
    element?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
      element?.close();
      active?.focus();
    };
  }, []);
  return (
    <dialog
      ref={dialog}
      className="video-dialog"
      aria-labelledby="video-title"
      onCancel={(event) => {
        event.preventDefault();
        close();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="dialog-head">
        <h2 id="video-title">{video.title}</h2>
        <button
          className="icon-button"
          onClick={close}
          aria-label="Close video"
        >
          <X />
        </button>
      </div>
      {video.file ? (
        <video
          src={video.file}
          poster={video.poster}
          controls
          autoPlay
          playsInline
          preload="metadata"
        />
      ) : (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
          title={video.title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      )}
      <p>
        Having trouble playing?{" "}
        <a
          href={video.file ?? `https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noreferrer"
        >
          {video.file ? "Open the video file" : "Watch on YouTube"}{" "}
          <ArrowUpRight size={14} />
        </a>
      </p>
    </dialog>
  );
}

type FormStatus =
  | { state: "idle" | "sending" | "sent" }
  | { state: "error"; message: string };

function ProjectForm() {
  const [status, setStatus] = useState<FormStatus>({ state: "idle" });
  const [token, setToken] = useState("");
  useEffect(() => {
    fetch("/api/form", { cache: "no-store" })
      .then((r) => r.json())
      .then((d) => setToken(d.token ?? ""))
      .catch(() => {});
  }, []);
  async function send(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, token }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus({
          state: "error",
          message: body.error ?? "Something went wrong. Please call (810) 358-0518.",
        });
        return;
      }
      form.reset();
      setStatus({ state: "sent" });
    } catch {
      setStatus({ state: "error", message: "Couldn’t send. Please call (810) 358-0518." });
    }
  }
  return (
    <form id="inquiry" className="project-form" onSubmit={send}>
      {/* Honeypot: hidden from people, filled in by bots. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />
      <div className="form-heading">
        <span className="eyebrow">LET’S MAKE SOMETHING MEANINGFUL</span>
        <Music2 size={22} />
      </div>
      <div className="field-row">
        <label>
          Your name
          <input
            name="name"
            placeholder="First and last name"
            autoComplete="name"
            required
            maxLength={100}
          />
        </label>
        <label>
          Email address
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
            maxLength={200}
          />
        </label>
      </div>
      <label>
        What are you working on?
        <span className="select-wrap">
          <select name="type" defaultValue="" required>
            <option value="" disabled>
              Select your project
            </option>
            <option>Full album or EP</option>
            <option>Single or songwriter demo</option>
            <option>Custom soundtrack</option>
            <option>Church or choir project</option>
            <option>Mixing and mastering</option>
            <option>Something else</option>
          </select>
          <ChevronDown size={16} />
        </span>
      </label>
      <label>
        Tell us a little about it
        <textarea
          name="message"
          rows={3}
          placeholder="Your music, your vision, your timing…"
          required
          maxLength={4000}
        />
      </label>
      <button
        className="button copper"
        type="submit"
        disabled={status.state === "sending"}
      >
        {status.state === "sending" ? "Sending…" : "Let’s talk about your project"}{" "}
        <ArrowUpRight size={19} />
      </button>
      <p className="form-note">
        Your message goes straight to Stephen. Rather talk? Call{" "}
        <a href="tel:+18103580518">(810) 358-0518</a>.
      </p>
      {status.state === "sent" && (
        <div className="form-status" role="status">
          <Check size={18} />
          <p>
            Thank you — it’s sent. Stephen will get back to you personally.
          </p>
        </div>
      )}
      {status.state === "error" && (
        <div className="form-status" role="alert">
          <p>{status.message}</p>
        </div>
      )}
    </form>
  );
}

export default function Studio() {
  const [menu, setMenu] = useState(false);
  const [video, setVideo] = useState<VideoItem | null>(null);
  const [filter, setFilter] = useState("All projects");
  const [photo, setPhoto] = useState(0);
  const gallery = [
    {
      image: "control-room",
      label: "The control room",
      caption: "A space to find your sound.",
    },
    {
      image: "microphones",
      label: "The microphone collection",
      caption: "The right voice. The right microphone.",
    },
    {
      image: "mixing",
      label: "Behind the mix",
      caption: "Every detail deserves to be heard.",
    },
  ];
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
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="header">
        <div className="nav-wrap">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map(([label, href]) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
          </nav>
          <a className="button dark nav-cta" href="#contact">
            Start a project <ArrowUpRight size={17} />
          </a>
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
            {[...links, ["Start a project", "#contact"]].map(
              ([label, href]) => (
                <a href={href} key={href} onClick={() => setMenu(false)}>
                  {label}
                  <ArrowUpRight size={20} />
                </a>
              ),
            )}
          </nav>
        )}
      </header>

      <main id="main">
        <section id="home" className="hero">
          <Image
            src="/images/console.webp"
            alt="Mixing console and recording equipment at Great Lakes Gospel Studio"
            fill
            priority
            sizes="100vw"
            className="hero-image"
          />
          <div className="hero-shade" />
          <div className="hero-inner container">
            <div className="hero-top">
              <p className="eyebrow">
                <span className="status-dot" /> A CHRISTIAN RECORDING STUDIO
              </p>
              <p className="hero-location">
                <MapPin size={13} /> LAPEER, MICHIGAN
              </p>
            </div>
            <div className="hero-copy">
              <h1>
                YOUR SOUND.
                <br />A GREATER
                <br />
                <span>PURPOSE.</span>
              </h1>
              <p>
                Music has the power to move hearts.
                <br />
                Let’s make a recording that does just that.
              </p>
              <div className="hero-actions">
                <a className="button copper" href="#contact">
                  Bring your music to life <ArrowUpRight size={18} />
                </a>
                <a className="text-button" href="#listen">
                  <span className="play-ring">
                    <Play size={12} fill="currentColor" />
                  </span>{" "}
                  Hear the difference
                </a>
              </div>
            </div>
            <button
              className="hero-tour"
              onClick={() =>
                setVideo({
                  id: "nlOYpwAS8Jg",
                  title: "Inside Great Lakes Gospel Studio",
                })
              }
            >
              <span className="tour-play">
                <Play size={20} fill="currentColor" />
              </span>
              <span>
                STEP INSIDE<small>Take a studio tour</small>
              </span>
              <ArrowUpRight size={20} />
            </button>
            <div className="hero-bottom">
              <span>PERSONAL ATTENTION. PROFESSIONAL SOUND.</span>
              <a href="#studio">
                EXPLORE THE STUDIO <ArrowDown size={15} />
              </a>
            </div>
          </div>
          <div className="hero-side">
            RECORDING · PRODUCTION · MIXING · MASTERING
          </div>
        </section>

        <div className="craft-strip">
          <div className="container">
            <span>ROOTED IN FAITH.</span>
            <Soundmark />
            <span>CRAFTED WITH CARE.</span>
            <Soundmark />
            <span>MADE TO BE HEARD.</span>
            <Soundmark />
            <span className="strip-last">GREAT LAKES. GREATER PURPOSE.</span>
          </div>
        </div>

        <section id="studio" className="intro section container">
          <div className="intro-label">
            <p className="eyebrow section-label">01 / WELCOME TO GREAT LAKES</p>
            <span className="mini-disc" aria-hidden="true">
              <Soundmark />
            </span>
          </div>
          <div className="intro-content">
            <h2>
              Big sound.
              <br />
              <span className="serif">Even bigger heart.</span>
            </h2>
            <div className="intro-columns">
              <p>
                Your music is more than a collection of songs. It’s your story,
                your calling, and a message worth sharing. We’re here to help
                you capture it.
              </p>
              <div>
                <p>
                  Based in Lapeer, Michigan, Great Lakes Gospel Studio brings
                  thoughtful production and a personal approach to Christian
                  music. From your very first demo to your next full album,
                  there’s a place for you here.
                </p>
                <a href="#people" className="underlink">
                  Meet your producer <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services section container">
          <div className="section-heading">
            <div>
              <p className="eyebrow section-label">
                02 / FROM FIRST NOTE TO FINAL MASTER
              </p>
              <h2>
                Your vision.
                <br className="mobile-break" />{" "}
                <span className="serif">Our craft.</span>
              </h2>
            </div>
            <p>
              Everything your music needs.
              <br />
              People who care about getting it right.
            </p>
          </div>
          <div className="services-grid">
            {[
              {
                n: "01",
                title: "Recording & production",
                description:
                  "A comfortable space, a patient producer, and the freedom to give your best performance.",
                image: "microphones",
                icon: <Mic2 />,
              },
              {
                n: "02",
                title: "Custom soundtracks",
                description:
                  "From a simple piano arrangement to a full band, give your songs a sound of their own.",
                image: "keys",
                icon: <Music2 />,
              },
              {
                n: "03",
                title: "Mixing & mastering",
                description:
                  "Bring every part together with clarity, warmth, and a finish that’s ready to share.",
                image: "mixing",
                icon: <SlidersHorizontal />,
              },
            ].map((service) => (
              <a key={service.n} className="service-card" href="#contact">
                <div className="service-image">
                  <Image
                    src={`/images/${service.image}.webp`}
                    alt=""
                    fill
                    sizes="(max-width: 700px) 100vw, 33vw"
                  />
                  <span className="service-number">{service.n}</span>
                  <span className="service-icon">{service.icon}</span>
                </div>
                <div className="service-title">
                  <h3>{service.title}</h3>
                  <ArrowUpRight size={21} />
                </div>
                <p>{service.description}</p>
              </a>
            ))}
          </div>
          <div className="service-note">
            <span>ALSO IN OUR REPERTOIRE</span>
            <p>
              Songwriter demos <i /> Choir & church recordings <i /> Background
              vocals <i /> Radio commercials <i /> Album artwork & CD
              duplication
            </p>
          </div>
        </section>

        <section id="listen" className="listen section">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow section-label">
                  03 / THE SOUND SPEAKS FOR ITSELF
                </p>
                <h2>
                  Made here.
                  <br />
                  <span className="serif">Meant to be heard.</span>
                </h2>
              </div>
              <div className="listen-aside">
                <Headphones size={27} />
                <p>
                  Real artists. Real recordings.
                  <br />
                  Find a little inspiration for your next project.
                </p>
              </div>
            </div>
            <div
              className="filter-row"
              role="group"
              aria-label="Filter music projects"
            >
              {["All projects", "Gospel & hymns", "Instrumental"].map(
                (item) => (
                  <button
                    key={item}
                    className={filter === item ? "active" : ""}
                    aria-pressed={filter === item}
                    onClick={() => setFilter(item)}
                  >
                    {item}
                  </button>
                ),
              )}
              <span>RECORDED AT GREAT LAKES GOSPEL STUDIO</span>
            </div>
            <div className="project-grid" aria-live="polite">
              {projects
                .filter(
                  (p) =>
                    filter === "All projects" ||
                    (filter === "Instrumental"
                      ? p.category === "Instrumental"
                      : p.category !== "Instrumental"),
                )
                .map((project) => (
                  <button
                    className="project-card"
                    key={project.key}
                    onClick={() => setVideo(videoFor(project))}
                    aria-label={`Play ${project.title} by ${project.artist}`}
                  >
                    <div className={`album-art cover-${project.key}`}>
                      <Image
                        src={`/images/${project.image}`}
                        alt=""
                        fill
                        sizes="(max-width: 600px) 50vw, 25vw"
                      />
                      <span className="cover-top">
                        GLGS <span>THE RECORDINGS</span>
                      </span>
                      <span className="cover-title">
                        {project.title}
                        <small>{project.artist}</small>
                      </span>
                      <span className="album-play">
                        <Play fill="currentColor" size={18} />
                      </span>
                    </div>
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.artist}</p>
                  </button>
                ))}
              <a className="project-card project-next" href="#contact">
                <div className="album-art">
                  <span className="cover-top">
                    GLGS <span>WHAT’S NEXT</span>
                  </span>
                  <span className="cover-title">
                    Your song
                    <small>Recorded in Lapeer, Michigan</small>
                  </span>
                  <span className="album-play">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <span className="project-category">Coming soon</span>
                <h3>Your project</h3>
                <p>Every recording starts with a conversation</p>
              </a>
            </div>
            <div className="client-roll">
              <span className="eyebrow">
                OUR PREVIOUS CLIENTS INCLUDE GROUPS, SOLOISTS, AND SONGWRITERS
              </span>
              <p>
                {clients.map((client) => (
                  <span key={client}>{client}</span>
                ))}
              </p>
            </div>
            <div className="listen-footer">
              <span className="status-dot" />
              <p>Every project starts with a conversation.</p>
              <a href="#contact">
                Let’s talk about yours <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section className="space-section section container">
          <div className="space-copy">
            <p className="eyebrow section-label">04 / A SPACE TO CREATE</p>
            <h2>
              Settle in.
              <br />
              <span className="serif">Sound like you.</span>
            </h2>
            <p>
              Great recordings start with feeling at home. Our acoustically
              treated studio gives you room to focus, experiment, and enjoy the
              process.
            </p>
            <ul className="equipment">
              <li>
                <span>THE WORKFLOW</span>Pro Tools Studio & Slate Raven
              </li>
              <li>
                <span>THE DETAIL</span>Melodyne & Slate Digital
              </li>
              <li>
                <span>THE SOUND</span>Quality microphones. Real instruments.
              </li>
            </ul>
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
            <div className="space-links">
              <a className="underlink" href="/equipment">
                See the full equipment list <ArrowUpRight size={15} />
              </a>
              <a className="underlink" href="/sessions">
                Photos from recent sessions <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
          <div className="studio-gallery">
            <div className="gallery-image">
              <Image
                key={photo}
                src={`/images/${gallery[photo].image}.webp`}
                alt={gallery[photo].label}
                fill
                sizes="(max-width: 800px) 100vw, 60vw"
              />
              <span className="gallery-tag">
                <span className="status-dot" /> GREAT LAKES GOSPEL STUDIO
              </span>
            </div>
            <div className="gallery-bottom">
              <p>{gallery[photo].caption}</p>
              <div className="gallery-dots" aria-label="Studio photos">
                {gallery.map((item, i) => (
                  <button
                    key={item.image}
                    onClick={() => setPhoto(i)}
                    aria-label={`Show ${item.label}`}
                    aria-pressed={photo === i}
                    className={photo === i ? "active" : ""}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="people" className="people">
          <div className="container people-inner">
            <div className="producer-photo">
              <Image
                src="/images/stephen.webp"
                alt="Stephen Forester, owner and producer of Great Lakes Gospel Studio"
                fill
                sizes="(max-width: 650px) 100vw, 40vw"
              />
              <div className="producer-caption">
                <strong>Stephen Forester</strong>
                <span>OWNER · PRODUCER · RECORDING ENGINEER</span>
              </div>
            </div>
            <div className="people-copy">
              <p className="eyebrow section-label">
                THE PERSON BEHIND THE SOUND
              </p>
              <h2>
                A musician’s ear.
                <br />
                <span className="serif">A servant’s heart.</span>
              </h2>
              <p>
                Meet Stephen. A musician, producer, and the founder of Great
                Lakes Gospel Studio, he brings a love for gospel music to every
                session.
              </p>
              <p>
                With a background in piano, guitars, bass, vocals, and
                arranging, Stephen understands both sides of the microphone.
                He’ll help you shape your ideas and bring out the best in your
                music—with patience and care along the way.
              </p>
              <a
                className="underlink"
                href="https://www.foresterministries.com"
                target="_blank"
                rel="noreferrer"
              >
                Explore Stephen’s ministry <ArrowUpRight size={17} />
              </a>
              <div className="partner-note">
                <span className="eyebrow">GOOD MUSIC IS A COLLABORATION.</span>
                <p>
                  Our network includes experienced players, arrangers, and
                  mastering engineers. We’ll help find the right talent for your
                  project.
                </p>
                <a className="underlink" href="/team">
                  Meet our staff & partners <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonial section container">
          <span className="quote-mark" aria-hidden="true">
            “
          </span>
          <blockquote>
            From concept to final product,
            <br />
            you did it all!
          </blockquote>
          <div className="quote-credit">
            <span className="credit-line" />
            <div>
              <strong>Jim Kitchen</strong>
              <p>Stronghold Quartet · Recording artist</p>
            </div>
          </div>
          <p className="quote-context">
            On recording with Great Lakes Gospel Studio
          </p>
          <a className="underlink quote-more" href="/testimonials">
            Read what our clients say <ArrowUpRight size={15} />
          </a>
        </section>

        <section id="pricing" className="pricing section">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow section-label">
                  05 / GREAT MUSIC. WITHIN REACH.
                </p>
                <h2>
                  A big vision.
                  <br />
                  <span className="serif">A real-world budget.</span>
                </h2>
              </div>
              <p>
                Quality recording should feel possible.
                <br />
                Let’s find an approach that works for you.
              </p>
            </div>
            <div className="price-grid">
              <div className="price-card">
                <Mic2 size={25} />
                <h3>Studio time</h3>
                <p className="price">
                  <span>$30</span> / hour
                </p>
                <p>Recording, production, editing, and mixing with Stephen.</p>
                <ul>
                  <li>
                    <Check size={15} /> Personal guidance throughout
                  </li>
                  <li>
                    <Check size={15} /> Original tracks & vocal sessions
                  </li>
                  <li>
                    <Check size={15} /> Flexible scope for your project
                  </li>
                </ul>
                <a href="#contact" className="underlink">
                  Plan your session <ArrowUpRight size={17} />
                </a>
              </div>
              <div className="price-card featured">
                <Music2 size={25} />
                <h3>Custom soundtracks</h3>
                <p className="price">
                  <small>from</small>
                  <span>$50</span> / track
                </p>
                <p>An arrangement that fits your voice and serves your song.</p>
                <ul>
                  <li>
                    <Check size={15} /> Piano-only tracks: $50
                  </li>
                  <li>
                    <Check size={15} /> Full band, up to 5 instruments: $120
                  </li>
                  <li>
                    <Check size={15} /> Full-band tracks include light mastering
                  </li>
                </ul>
                <a href="#contact" className="underlink">
                  Find your sound <ArrowUpRight size={17} />
                </a>
              </div>
              <div className="price-card">
                <SlidersHorizontal size={25} />
                <h3>Mastering</h3>
                <p className="price">
                  <span>$50</span> / song
                </p>
                <p>
                  The finishing touch that helps your music translate beyond the
                  studio.
                </p>
                <ul>
                  <li>
                    <Check size={15} /> Final tone & dynamics
                  </li>
                  <li>
                    <Check size={15} /> Consistent playback levels
                  </li>
                  <li>
                    <Check size={15} /> Required for finished studio releases
                  </li>
                </ul>
                <a href="#contact" className="underlink">
                  Finish your project <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
            <p className="pricing-note">
              Published studio rates. Final scope and pricing are confirmed with
              Stephen before your session. Additional musicians, live strings,
              and CD duplication are listed on the{" "}
              <a href="/pricing">full price list</a>.
            </p>
            <details className="pricing-faq">
              <summary>
                How much time should I plan for a song?
                <ChevronDown size={19} />
              </summary>
              <p>
                For an original recording, the studio typically estimates 5–7
                hours per song for instrumentation, vocals, editing, tuning, and
                mixing. At the published rate, that’s $150–$210 of studio time,
                plus $50 for mastering. Simpler arrangements or existing
                accompaniment tracks may take less time. Stephen will help you
                work out the right plan.
              </p>
            </details>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="container contact-inner">
            <div className="contact-copy">
              <p className="eyebrow section-label">
                06 / THE NEXT CHAPTER STARTS HERE
              </p>
              <h2>
                YOU HAVE
                <br />A SONG.
                <br />
                <span>LET’S HEAR IT.</span>
              </h2>
              <p>
                That idea you’ve been carrying?
                <br />
                Let’s turn it into something you can share.
              </p>
              <div className="contact-links">
                <a href="tel:+18103580518">
                  <Phone size={18} />
                  <span>(810) 358-0518</span>
                  <ArrowUpRight size={17} />
                </a>
                <a href="#inquiry">
                  <Mail size={18} />
                  <span>Send Stephen a message</span>
                  <ArrowUpRight size={17} />
                </a>
                <p>
                  <MapPin size={18} /> Lapeer, Michigan · Sessions by
                  appointment
                </p>
              </div>
            </div>
            <ProjectForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <Brand />
            <p>Rooted in faith. Made to be heard.</p>
            <a href="#home" className="back-top">
              BACK TO TOP <ArrowUpRight size={16} />
            </a>
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
            <p className="footer-credit">
              <a href="https://www.elijahdesent.com" target="_blank" rel="noopener">
                Website Design
              </a>{" "}
              by Elijah Desent
            </p>
          </div>
        </div>
      </footer>
      {video && <VideoDialog video={video} close={() => setVideo(null)} />}
    </>
  );
}
