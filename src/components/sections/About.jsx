"use client";

import Container from "@/components/ui/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import ButtonLink from "@/components/ui/ButtonLink";

export default function About() {
  const stats = [
    { value: "1+", label: "Years Experience" },
    { value: "15+", label: "Projects Completed" },
    { value: "30+", label: "Git Repo" },
    { value: "24/7", label: "Support" },
  ];

  const skills = [
    { name: "Frontend", percentage: 95, color: "from-teal-400 to-teal-300" },
    { name: "Backend", percentage: 90, color: "from-blue-400 to-blue-300" },
    {
      name: "Database",
      percentage: 85,
      color: "from-purple-400 to-purple-300",
    },
  ];

  const experiences = [
    {
      year: "2025",
      title: "Weather and Movie app",
      company: "Learning Practice",
      description: "Building scalable web applications and leading development",
    },
    {
      year: "2025_2026",
      title: "DTX Exchange",
      company: "Full Stack Developer",
      description:
        "Developed and maintained multiple coins prices and real time trading logic React, and Node.js.",
    },
    {
      year: "2025",
      title: "Chat Application",
      company: "Learning Practice ",
      description:
        "Created responsive user interfaces and improved application performance Chat application.",
    },
  ];

  const values = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Performance First",
      description:
        "I optimize every component for speed and efficiency, ensuring lightning-fast load times.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          />
        </svg>
      ),
      title: "Clean Architecture",
      description:
        "I write maintainable, scalable code following industry best practices and design patterns.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Mobile-First Design",
      description:
        "Every project starts with mobile experience, ensuring perfect responsiveness across all devices.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Client-Centric",
      description:
        "I focus on understanding your business needs and delivering solutions that drive real results.",
    },
  ];

  return (
    <section
      id="about"
      className="scroll-mt-24 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <Container className="py-20 lg:py-28">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-teal-300/10 px-4 py-1.5 text-xs font-semibold text-teal-300 mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
            About Me
          </motion.span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Crafting Digital{" "}
            <span className="bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent">
              Experiences
            </span>{" "}
            That Matter
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-8 text-slate-400 max-w-2xl">
            I'm a passionate full-stack developer with over 1 years of
            experience in building modern web applications. I specialize in
            creating performant, scalable, and user-friendly digital solutions
            that help businesses grow and succeed in the digital landscape.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:border-teal-300/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <span className="text-3xl sm:text-4xl font-bold text-white group-hover:text-teal-300 transition-colors duration-300">
                  {stat.value}
                </span>
                <p className="mt-2 text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Experience & Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="h-px w-8 bg-teal-300/50" />
              My Journey
            </h3>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  className="group relative pl-8 border-l border-white/10 hover:border-teal-300/50 transition-colors duration-300"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-0 -translate-x-1/2">
                    <div className="size-3 rounded-full border-2 border-slate-700 bg-slate-950 group-hover:border-teal-300 group-hover:bg-teal-300/20 transition-all duration-300" />
                  </div>

                  <span className="text-xs font-semibold text-teal-300 tracking-wider">
                    {exp.year}
                  </span>
                  <h4 className="text-lg font-semibold text-white mt-1 group-hover:text-teal-300 transition-colors duration-300">
                    {exp.title}
                  </h4>
                  <p className="text-sm text-slate-500 mt-1">{exp.company}</p>
                  <p className="text-sm text-slate-400 mt-3 leading-7">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Skills & Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-12"
          >
            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="h-px w-8 bg-teal-300/50" />
                Technical Skills
              </h3>

              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-slate-500">
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.8 + index * 0.1,
                          duration: 1,
                          ease: "easeOut",
                        }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 blur-sm" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="h-px w-8 bg-teal-300/50" />
                What Drives Me
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    whileHover={{ y: -3 }}
                    className="group p-5 rounded-2xl border border-white/10 bg-white/5 hover:border-teal-300/30 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="text-teal-300 mb-3 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                      {value.icon}
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-2">
                      {value.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-6 group-hover:text-slate-300 transition-colors duration-300">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm">
            <p className="text-slate-300 text-sm sm:text-base">
              Ready to bring your project to life?
            </p>
            <ButtonLink href="#contact" variant="primary">
              Let's Work Together
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </ButtonLink>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
