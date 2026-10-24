import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anshikaanand.dev"),
  title: "Anshika Anand — Software Engineer, Salesforce & Backend Developer",
  description:
    "Anshika Anand is a Software Engineer specializing in Salesforce Development, Java backend systems, AI, and cybersecurity. Explore her work, experience, and projects.",
  keywords: [
    "Anshika Anand",
    "Salesforce Developer",
    "Java Backend Developer",
    "AI Engineer",
    "Cybersecurity",
  ],
  authors: [{ name: "Anshika Anand" }],
  openGraph: {
    title: "Anshika Anand — Software Engineer",
    description:
      "Salesforce Development, Java backend systems, AI, and cybersecurity — explore Anshika Anand's work and experience.",
    url: "https://anshikaanand.dev",
    siteName: "Anshika Anand",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anshika Anand — Software Engineer",
    description:
      "Salesforce Development, Java backend systems, AI, and cybersecurity — explore Anshika Anand's work and experience.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-ink text-ash font-body antialiased selection:bg-accent-blue/30">
        {children}
      </body>
    </html>
  );
}
