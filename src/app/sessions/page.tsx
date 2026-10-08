import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import SessionGallery from "@/components/session-gallery";

export const metadata: Metadata = {
  title: "Session Photos | Great Lakes Gospel Studio",
  description:
    "Photos from recent recording sessions at Great Lakes Gospel Studio in Lapeer, Michigan: soloists, quartets, families, and session musicians at work.",
};

export default function SessionsPage() {
  return (
    <PageShell
      eyebrow="SESSION PICS"
      title="REAL PEOPLE."
      accent="REAL SESSIONS."
      intro={
        <p>
          These are just a few shots of our recent recording sessions at GLGS!
          Soloists, quartets, families, and session players, captured mid-take.
        </p>
      }
    >
      <section className="section container">
        <SessionGallery />
      </section>
    </PageShell>
  );
}
