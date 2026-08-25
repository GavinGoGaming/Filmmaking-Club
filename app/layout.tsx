import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SVGFilters from "./components/Filters";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "South Pasadena Filmmaking Clubs",
  description: "Official website for SPMS Film Club and SPHS Filmmaking Club",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${instrumentSerif.variable}`}>
      <body>
        <SVGFilters/>
        {children}
      </body>
    </html>
  );
}
