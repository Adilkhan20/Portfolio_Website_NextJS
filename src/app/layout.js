import { Inter } from "next/font/google";

import { siteConfig } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: `${siteConfig.name} | ${siteConfig.role}`,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: [
    "Adil Khan",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "MERN Stack Developer",
    "Node.js Developer",
    "Freelance Web Developer Pakistan",
  ],

  authors: [{ name: siteConfig.name }],

  creator: siteConfig.name,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: `${siteConfig.name} Portfolio`,
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description,
  },

  robots: {
    index: true,
    follow: true,
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
