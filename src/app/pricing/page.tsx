import type { Metadata } from "next";
import { Check, Disc3, Mic2, Music2, SlidersHorizontal } from "lucide-react";
import { PageShell, SectionHeading } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Prices | Great Lakes Gospel Studio",
  description:
    "Studio time, mastering, custom soundtracks, session musicians, live strings, and CD duplication rates at Great Lakes Gospel Studio in Lapeer, Michigan.",
};

const musicians: { name: string; what?: string; rates: string[] }[] = [
  {
    name: "Mark Forester",
    what: "Various instruments, arranging, mixing, etc.",
    rates: ["Call for details"],
  },
  {
    name: "Keith Barkley",
    what: "Full-band rhythm tracks and orchestrations",
    rates: [
      "$125 per song (full-band rhythm tracks), or 5 for $500",
      "$125 per song for orchestrations, or 5 songs for $500",
    ],
  },
  {
    name: "Rob Mills",
    rates: ["Call for details"],
  },
  {
    name: "Eli Fortner",
    what: "Guitars and drums",
    rates: ["$50 per song"],
  },
  {
    name: "Rob Novell",
    what: "Bass, piano, drums, guitar, mandolin, and orchestrations",
    rates: [
      "$25 per instrument, per song",
      "$50–$75 per song for orchestrations",
      "$250 for a live string or brass section",
    ],
  },
  {
    name: "David Johnson",
    what: "Steel guitar, fiddle, harmonica, dobro, and pedal steel",
    rates: [
      "$50 per song — not each: all of those can be added to a single track for $50 per song",
    ],
  },
];

export default function PricingPage() {
  return (
    <PageShell
      eyebrow="PRICES"
      title="GREAT MUSIC."
      accent="WITHIN REACH."
      intro={
        <p>
          You will find that we are very affordable, and we will do our best to
          work with your budget and meet your needs. Final scope and pricing are
          confirmed with Stephen before your session.
        </p>
      }
    >
      <section className="pricing section">
        <div className="container">
          <SectionHeading
            label="01 / STUDIO RATES"
            title="Recording, mastering,"
            accent="and soundtracks."
          />
          <div className="price-grid">
            <div className="price-card">
              <Mic2 size={25} />
              <h3>Recording studio time</h3>
              <p className="price">
                <span>$30</span> / hour
              </p>
              <p>
                We usually estimate about five to seven hours per song to record
                original soundtracks, vocals, background vocals, editing,
                tuning, and mixing.
              </p>
              <ul>
                <li>
                  <Check size={15} /> Discounts if you record with pre-recorded
                  soundtracks you already have
                </li>
                <li>
                  <Check size={15} /> Discounts for albums with very simple
                  instrumentation
                </li>
                <li>
                  <Check size={15} /> Add musicians from our roster (below)
                </li>
              </ul>
            </div>
            <div className="price-card featured">
              <Music2 size={25} />
              <h3>Custom soundtracks</h3>
              <p className="price">
                <small>from</small>
                <span>$50</span> / track
              </p>
              <p>An original accompaniment track built for your song.</p>
              <ul>
                <li>
                  <Check size={15} /> $50 — Piano only
                </li>
                <li>
                  <Check size={15} /> $120 — Full band (up to five instruments)
                </li>
                <li>
                  <Check size={15} /> Choose from piano, bass, electric guitar,
                  acoustic guitar, drums, percussion, keyboard orchestrations,
                  organ, and synths
                </li>
                <li>
                  <Check size={15} /> Full-band price includes light mastering
                </li>
              </ul>
            </div>
            <div className="price-card">
              <SlidersHorizontal size={25} />
              <h3>Mastering</h3>
              <p className="price">
                <span>$50</span> / song
              </p>
              <p>
                Mastering is the last step in the production to get your music
                to sound professional. It makes your little recording sound like
                a big one.
              </p>
              <ul>
                <li>
                  <Check size={15} /> Final EQ and compression
                </li>
                <li>
                  <Check size={15} /> Stereo widening and dither
                </li>
                <li>
                  <Check size={15} /> Volume boosted to commercial levels
                </li>
                <li>
                  <Check size={15} /> Some additional advanced tweaks
                </li>
              </ul>
            </div>
          </div>
          <div className="price-callout">
            <strong>Please note that mastering is not optional.</strong>
            <p>
              Unmastered music does not translate well outside of a studio
              setting, and we will not release unmastered music for the sake of
              quality control.
            </p>
          </div>
        </div>
      </section>

      <section id="musicians" className="section container">
        <SectionHeading
          label="02 / SESSION MUSICIANS"
          title="Additional musicians"
          accent="for track overdubs."
          aside="Players from our roster of talent can be added to your songs for additional charges."
        />
        <div className="rate-table">
          {musicians.map((m) => (
            <div className="rate-row" key={m.name}>
              <div>
                <h3>{m.name}</h3>
                {m.what && <p>{m.what}</p>}
              </div>
              <ul>
                {m.rates.map((rate) => (
                  <li key={rate}>{rate}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="strings-card">
          <div>
            <p className="eyebrow section-label">
              LIVE STRING/BRASS ORCHESTRATIONS
            </p>
            <h3>
              Violin and viola, in multiple parts and overdubs (usually 18 or
              more tracks)
            </h3>
            <p>
              This is done in St. Petersburg, Russia by a fantastic violin team
              we work with. This is an amazing value, and the quality is first
              rate!
            </p>
          </div>
          <dl>
            <div>
              <dt>Violin & viola</dt>
              <dd>$120</dd>
            </div>
            <div>
              <dt>Add cello</dt>
              <dd>+$60</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="cd-duplication" className="pricing section">
        <div className="container">
          <SectionHeading
            label="03 / CD DUPLICATION"
            title="Order as few as 50."
            accent="Order as needed."
          />
          <div className="cd-intro">
            <Disc3 size={28} />
            <p>
              CD duplication is handled by our partners at Moonlight Duplication
              Studio in Burton, MI. You purchase your print up front (a minimum
              of 500 pieces of print at a time), then order as many CDs as you
              want packaged at a time. They will print the disc, duplicate,
              package, and shrink wrap it. You can order as few as 50 at a time.
              No need to have 1,000 CDs on the shelf! Of course, if you need a
              big order, they can do that. They recently did an order of 35,000
              CDs for one customer.
            </p>
          </div>
          <div className="cd-grid">
            <div className="price-card">
              <h3>Traditional jewel cases</h3>
              <dl className="cd-rates">
                <div>
                  <dt>Print cost</dt>
                  <dd>$125 for 1,000 inserts and tray cards</dd>
                </div>
                <div>
                  <dt>Duplication & packaging</dt>
                  <dd>$1.35 each (minimum order of 50)</dd>
                </div>
              </dl>
            </div>
            <div className="price-card featured">
              <h3>Cardboard sleeves</h3>
              <p className="cd-tag">The newer, very popular option</p>
              <dl className="cd-rates">
                <div>
                  <dt>Print cost</dt>
                  <dd>$320 for 1,000 sleeves</dd>
                </div>
                <div>
                  <dt>Duplication & packaging</dt>
                  <dd>$0.95 each (minimum order of 50)</dd>
                </div>
              </dl>
            </div>
          </div>
          <p className="pricing-note">
            Published studio rates. Final scope and pricing are confirmed with
            Stephen before your session. You can also pay for our services with
            PayPal; ask Stephen for details.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
