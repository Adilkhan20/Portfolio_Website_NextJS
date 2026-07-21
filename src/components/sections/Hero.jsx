"use client";

import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import { siteConfig } from "@/data/site";
import Image from "next/image";
import { motion } from "framer-motion";
import TypewriterText from "./TypewriterText";

const capabilities = [
  {
    title: "Full-stack",
    description: "Frontend to database",
  },
  {
    title: "Responsive",
    description: "Mobile-first development",
  },
  {
    title: "Maintainable",
    description: "Clean and reusable code",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
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

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 z-[1] h-48 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

      {/* Animated Orbs */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-teal-500/5 blur-[100px]"
          animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[100px]"
          animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main Content */}
      <Container className="relative z-10 w-full py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Availability Badge */}
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/60 px-4 py-2 backdrop-blur-md mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <motion.span
                className="size-2 rounded-full bg-teal-300"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(94,234,212,0.4)",
                    "0 0 0 8px rgba(94,234,212,0)",
                    "0 0 0 0 rgba(94,234,212,0.4)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-xs font-semibold text-white">
                Available for freelance projects
              </span>
            </motion.div>

            {/* Name & Role */}
            <motion.p
              className="text-sm font-semibold tracking-[0.2em] text-teal-300 uppercase mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {siteConfig.name} · {siteConfig.role}
            </motion.p>

            {/* Main Heading - Fixed Structure */}
            <motion.h1
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <span className="block leading-tight">I build modern</span>
              <span className="block leading-tight">websites and</span>
              <span className="block min-h-[1.3em] leading-tight">
                <TypewriterText />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="mt-6 text-base sm:text-lg leading-8 text-slate-200 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              I&apos;m a full-stack developer specializing in React, Next.js,
              Node.js and modern database systems. I create fast, responsive and
              user-friendly applications for businesses and startups.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <a
                href="/resume/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-teal-300 px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-teal-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-500/25"
              >
                Download Resume
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </a>

              <ButtonLink
                href={`mailto:${siteConfig.email}`}
                variant="secondary"
              >
                Contact me
              </ButtonLink>
            </motion.div>

            {/* Capabilities */}
            <motion.div
              className="mt-10 grid gap-3 sm:grid-cols-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  className="group cursor-default rounded-xl bg-slate-950/50 backdrop-blur-md border border-white/10 p-4 hover:bg-slate-950/70 hover:border-teal-300/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="h-px w-4 bg-teal-300/50 group-hover:w-6 transition-all duration-300" />
                    <strong className="text-sm text-white group-hover:text-teal-300 transition-colors duration-300">
                      {capability.title}
                    </strong>
                  </div>
                  <span className="block text-xs text-slate-400 group-hover:text-slate-300 transition-colors duration-300 ml-6">
                    {capability.description}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Code Window */}
          <motion.div
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {/* Glow Effect */}
            <div className="absolute -inset-4 rounded-full bg-teal-300/5 blur-3xl" />

            {/* Code Window */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 backdrop-blur-xl shadow-2xl shadow-black/50">
              {/* Window Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-slate-900/50">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <span className="size-3 rounded-full bg-rose-400/80" />
                    <span className="size-3 rounded-full bg-yellow-300/80" />
                    <span className="size-3 rounded-full bg-teal-300/80" />
                  </div>
                  <span className="text-xs text-slate-500 ml-2">
                    developer.js
                  </span>
                </div>
                <span className="text-[10px] text-slate-600">JavaScript</span>
              </div>

              {/* Code Content */}
              <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm leading-7">
                <motion.p
                  className="text-slate-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.3 }}
                >
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-300">developer</span> = {"{"}
                </motion.p>
                <motion.p
                  className="pl-5 text-slate-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.3 }}
                >
                  name:{" "}
                  <span className="text-green-300">
                    &quot;{siteConfig.name}&quot;
                  </span>
                  ,
                </motion.p>
                <motion.p
                  className="pl-5 text-slate-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.3 }}
                >
                  role:{" "}
                  <span className="text-green-300">
                    &quot;Full-Stack Developer&quot;
                  </span>
                  ,
                </motion.p>
                <motion.p
                  className="pl-5 text-slate-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6, duration: 0.3 }}
                >
                  stack: [
                  <span className="text-green-300">&quot;Next.js&quot;</span>,{" "}
                  <span className="text-green-300">&quot;React&quot;</span>,{" "}
                  <span className="text-green-300">&quot;Node.js&quot;</span>],
                </motion.p>
                <motion.p
                  className="pl-5 text-slate-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.3 }}
                >
                  focus:{" "}
                  <span className="text-green-300">
                    &quot;Business results&quot;
                  </span>
                  ,
                </motion.p>
                <motion.p
                  className="pl-5 text-slate-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.0, duration: 0.3 }}
                >
                  available: <span className="text-purple-400">true</span>,
                </motion.p>
                <motion.p
                  className="text-slate-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.2, duration: 0.3 }}
                >
                  {"};"}
                </motion.p>
              </div>

              {/* Window Footer */}
              <div className="flex items-center gap-3 px-5 py-3 border-t border-white/10 bg-slate-900/50">
                <motion.span
                  className="size-2 rounded-full bg-teal-300"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs text-slate-400">Ready to build</span>
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div
              className="absolute -top-4 -right-4 rounded-xl border border-white/10 bg-slate-950/90 px-4 py-2.5 backdrop-blur-xl shadow-xl hidden sm:block"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <span className="text-[10px] text-slate-500">Core Stack</span>
              <p className="text-xs font-semibold text-white">Next.js · MERN</p>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 rounded-xl border border-white/10 bg-slate-950/90 px-4 py-2.5 backdrop-blur-xl shadow-xl hidden sm:block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.5 }}
            >
              <span className="text-[10px] text-slate-500">Based in</span>
              <p className="text-xs font-semibold text-white">
                {siteConfig.location}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
