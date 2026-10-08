import type { Metadata } from "next";
import { clients, testimonials } from "@/components/content";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Testimonials | Great Lakes Gospel Studio",
  description:
    "What soloists, quartets, churches, and songwriters say about recording with Stephen Forester at Great Lakes Gospel Studio in Lapeer, Michigan.",
};

export default function TestimonialsPage() {
  const lead = testimonials[0];
  return (
    <PageShell
      eyebrow="TESTIMONIALS"
      title="IN THEIR"
      accent="OWN WORDS."
      intro={
        <p>
          Soloists, quartets, churches, and songwriters have trusted their music
          to Great Lakes Gospel Studio. Here’s what a few of our previous
          customers had to say.
        </p>
      }
    >
      <section className="testimonial section container">
        <span className="quote-mark" aria-hidden="true">
          “
        </span>
        <blockquote>{lead.pull}</blockquote>
        <div className="quote-credit">
          <span className="credit-line" />
          <div>
            <strong>{lead.name}</strong>
            <p>{lead.role}</p>
          </div>
        </div>
      </section>

      <section className="pricing section">
        <div className="container review-grid">
          {testimonials.map((t) => (
            <figure className="review-card" key={t.name}>
              <span className="quote-mark" aria-hidden="true">
                “
              </span>
              <blockquote>
                {t.quote.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="client-roll client-roll-light">
          <span className="eyebrow">
            OUR PREVIOUS CLIENTS INCLUDE GROUPS, SOLOISTS, AND SONGWRITERS
          </span>
          <p>
            {clients.map((client) => (
              <span key={client}>{client}</span>
            ))}
          </p>
        </div>
      </section>
    </PageShell>
  );
}
