"use client";

import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import { siteConfig } from "@/data/site";
import Image from "next/image";

const capabilities = [
  { title: "Full-stack", description: "Frontend to database" },
  { title: "Responsive", description: "Mobile-first development" },
  { title: "Maintainable", description: "Clean and reusable code" },
];

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/profile/hero-bg.jpeg"
          alt="Background"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
        <div className="absolute inset-0 bg-slate-950/40" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[1] h-48 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

      <Container className="relative z-10 w-full py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-center">
          <div>
            <p className="text-sm font-semibold tracking-wide text-teal-300 uppercase mb-4">
              {siteConfig.name} &middot; {siteConfig.role}
            </p>

            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            >
              I build modern websites and web applications
            </h1>

            <p className="mt-6 text-base sm:text-lg leading-8 text-slate-200 max-w-xl">
              I&apos;m a full-stack developer working with React, Next.js,
              Node.js and modern database systems. I build responsive,
              user-friendly applications.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/resume/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-teal-300 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-teal-200 transition-colors"
              >
                Download Resume
              </a>

              <ButtonLink
                href={`mailto:${siteConfig.email}`}
                variant="secondary"
                className="border border-white/30 text-white hover:bg-white/10 px-5 py-2.5 text-sm rounded-md"
              >
                Contact me
              </ButtonLink>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {capabilities.map((capability) => (
                <div
                  key={capability.title}
                  className="rounded-lg bg-slate-950/50 border border-white/10 p-4"
                >
                  <strong className="block text-sm text-white mb-1">
                    {capability.title}
                  </strong>
                  <span className="block text-xs text-slate-400">
                    {capability.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-slate-950/80">
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
                <span className="text-sm font-semibold text-white">
                  {siteConfig.name}
                </span>
                <span className="text-xs text-slate-400">
                  {siteConfig.role}
                </span>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Stack</span>
                  <span className="text-white">Next.js, React, Node.js</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Based in</span>
                  <span className="text-white">{siteConfig.location}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Focus</span>
                  <span className="text-white">Full-stack web apps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
