import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Arjit Jain — Portfolio",
    template: "%s · Arjit Jain",
  },
  description:
    "Arjit Jain’s portfolio — full‑stack projects, experience, and contact.",
  applicationName: "Arjit Jain Portfolio",
  authors: [{ name: "Arjit Jain" }],
  creator: "Arjit Jain",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    title: "Arjit Jain — Portfolio",
    description:
      "Full‑stack projects, experience, and contact details for Arjit Jain.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Arjit Jain — Portfolio",
    description:
      "Full‑stack projects, experience, and contact details for Arjit Jain.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-dvh bg-neutral-950 text-white antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
