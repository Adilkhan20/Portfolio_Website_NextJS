import { Inter } from "next/font/google";

import { siteConfig } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// /** @type {import("next").Metadata} */
export const metadata = {
  metadataBase: new URL("https://iamaadilkhan.vercel.app"),

  title: {
    default: "Adil Khan | Full-Stack Developer",
    template: "%s | Adil Khan",
  },

  description:
    "Adil Khan is a full-stack developer specializing in Next.js, React, Node.js, and modern web applications.",

  applicationName: "Adil Khan Portfolio",

  authors: [
    {
      name: "Adil Khan",
      url: "https://iamaadilkhan.vercel.app",
    },
  ],

  creator: "Adil Khan",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Adil Khan | Full-Stack Developer",
    description:
      "Explore the portfolio and projects of Adil Khan, a full-stack developer specializing in Next.js and React.",
    url: "/",
    siteName: "Adil Khan Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adil Khan Full-Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Adil Khan | Full-Stack Developer",
    description:
      "Explore the portfolio and projects of Adil Khan, a Next.js and React developer.",
    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: siteConfig.url,
    email: `mailto:${siteConfig.email}`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "Pakistan",
    },
    knowsAbout: [
      "Next.js",
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "Prisma",
      "Socket.IO",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} min-h-screen overflow-x-hidden bg-[#070a12] text-white antialiased selection:bg-teal-300 selection:text-slate-950 [font-family:var(--font-inter)]`}
      >
        <a
          href="#main-content"
          className="fixed top-3 left-3 z-[100] -translate-y-24 rounded-lg bg-teal-300 px-4 py-2 font-bold text-slate-950 transition focus:translate-y-0"
        >
          Skip to main content
        </a>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />

        {children}
      </body>
    </html>
  );
}
