import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://greatlakesgospelstudio.elijahdesent.com"),
  title: "Great Lakes Gospel Studio | Your Sound. A Greater Purpose.",
  description:
    "A Christian recording studio in Lapeer, Michigan. Bring your music to life with Stephen Forester: recording, production, custom soundtracks, mixing and mastering.",
  openGraph: {
    title: "Great Lakes Gospel Studio",
    description:
      "Your sound. A greater purpose. Christian recording in Lapeer, Michigan.",
    images: [{ url: "/images/console.webp", width: 1920, height: 1280 }],
    type: "website",
  },
};
export const viewport: Viewport = { themeColor: "#191b18" };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${serif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
