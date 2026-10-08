import type { Metadata } from "next";
import Image from "next/image";
import { equipment } from "@/components/content";
import { PageShell, TourButton } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Facility & Equipment | Great Lakes Gospel Studio",
  description:
    "Pro Tools Studio, Melodyne, a Slate Raven touchscreen workstation, KRK monitoring, quality microphones, and real instruments at Great Lakes Gospel Studio in Lapeer, Michigan.",
};

const photos = [
  {
    image: "control-room.webp",
    alt: "The control room: two monitors running Pro Tools between KRK Rokit 8 speakers, against acoustic foam",
    w: 1920,
    h: 1280,
  },
  {
    image: "guitars.webp",
    alt: "A Fender Telecaster, an Ibanez bass, and two acoustic guitars leaning against acoustic foam",
    w: 1000,
    h: 1500,
  },
  {
    image: "condenser-mic.webp",
    alt: "A red-bodied condenser microphone in a shock mount behind a pop filter",
    w: 997,
    h: 1500,
  },
  {
    image: "eleven-rack.webp",
    alt: "The Avid Eleven Rack’s orange display glowing beside the mixing control surface",
    w: 1920,
    h: 1280,
  },
];

export default function EquipmentPage() {
  return (
    <PageShell
      eyebrow="FACILITY & EQUIPMENT"
      title="SERIOUS GEAR."
      accent="A COMFORTABLE ROOM."
      intro={
        <>
          <p>
            At Great Lakes Gospel Studio, we are equipped with state-of-the-art
            gear and software to meet even the most demanding projects.
          </p>
          <TourButton />
        </>
      }
    >
      <section className="section container gear-section">
        <div className="gear-photos">
          {photos.map((photo, i) => (
            <figure key={photo.image} className={`gear-photo gear-photo-${i}`}>
              <Image
                src={`/images/${photo.image}`}
                alt={photo.alt}
                fill
                sizes="(max-width: 800px) 50vw, 25vw"
              />
            </figure>
          ))}
        </div>
        <div className="gear-list">
          <p className="eyebrow section-label">OUR SETUP INCLUDES</p>
          {equipment.map((group) => (
            <div className="gear-group" key={group.group}>
              <h2>{group.group}</h2>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
