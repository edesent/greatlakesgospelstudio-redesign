import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { partners, stephenBio } from "@/components/content";
import { PageShell, SectionHeading } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Staff & Partners | Great Lakes Gospel Studio",
  description:
    "Meet Stephen Forester and the session musicians, string players, and mastering engineer who partner with Great Lakes Gospel Studio in Lapeer, Michigan.",
};

export default function TeamPage() {
  return (
    <PageShell
      eyebrow="STAFF & PARTNERS"
      title="GIFTED PEOPLE."
      accent="ONE PURPOSE."
      intro={
        <p>
          At Great Lakes Gospel Studio, we are blessed to work and partner with
          some incredibly talented musicians and producers, each with many years
          of experience behind them. Each one has special gifts, talents, and
          ideas that can be utilized to make unique-sounding recordings at a
          highly professional level. Each person is passionate about serving our
          Lord through music, and you can tell it on the final product!
        </p>
      }
    >
      <section className="people">
        <div className="container people-inner">
          <div className="producer-photo">
            <Image
              src="/images/team/stephen-forester.webp"
              alt="Stephen Forester smiling in a blue shirt in the studio, with guitars and a KRK monitor behind him"
              fill
              priority
              sizes="(max-width: 650px) 100vw, 40vw"
            />
            <div className="producer-caption">
              <strong>Stephen Forester</strong>
              <span>OWNER · PRODUCER · RECORDING ENGINEER</span>
            </div>
          </div>
          <div className="people-copy">
            <p className="eyebrow section-label">FOUNDER & OWNER</p>
            <h2>
              Stephen Forester
              <br />
              <span className="serif">Every session, start to finish.</span>
            </h2>
            {stephenBio.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
            <a
              className="underlink"
              href="https://www.foresterministries.com"
              target="_blank"
              rel="noreferrer"
            >
              Explore Stephen’s ministry <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionHeading
          label="OUR PARTNERS"
          title="The players behind"
          accent="the sound."
          aside="Add any of our partners to your project. Their rates are on the price list."
        />
        <div className="partner-grid">
          {partners.map((partner) => (
            <article className="partner-card" key={partner.name}>
              <div className="partner-avatar">
                <Image
                  src={`/images/team/${partner.image}`}
                  alt={partner.alt}
                  fill
                  sizes="120px"
                />
              </div>
              <span className="project-category">{partner.role}</span>
              <h3>{partner.name}</h3>
              {partner.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </article>
          ))}
          <article className="partner-card partner-card-cta">
            <span className="project-category">Need someone else?</span>
            <h3>The right talent for your project</h3>
            <p>
              Our network also includes Mark Forester, Keith Barkley, and Rob
              Mills for overdubs, arranging, rhythm tracks, and orchestrations.
            </p>
            <Link className="underlink" href="/pricing#musicians">
              See musician rates <ArrowUpRight size={15} />
            </Link>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
