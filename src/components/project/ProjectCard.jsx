"use client";

import ButtonLink from "@/components/ui/ButtonLink";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.8 + i * 0.1,
        duration: 0.4,
      },
    }),
  };

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/90 to-slate-950/80 backdrop-blur-xl transition-all duration-500 hover:border-teal-300/30 hover:shadow-2xl hover:shadow-teal-500/20 lg:flex-row lg:min-h-[550px]"
    >
      {/* Card Background Pattern */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(94,234,212,0.3) 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Card Glow Effects */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Image Container */}
      <div
        className={`relative flex w-full items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950/80 to-slate-900/50 p-6 sm:p-8 md:p-10 lg:w-[55%] lg:p-12 ${
          index % 2 !== 0 ? "lg:order-2" : ""
        }`}
      >
        {/* Decorative Frame Background */}
        <div className="absolute inset-4 rounded-2xl border border-white/5 bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm sm:inset-6 lg:inset-8" />

        {/* Animated Frame Border */}
        <motion.div
          className="absolute inset-6 rounded-2xl border border-teal-300/10 sm:inset-8 lg:inset-10"
          animate={{
            borderColor: isHovered
              ? "rgba(94, 234, 212, 0.3)"
              : "rgba(94, 234, 212, 0.1)",
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Corner Decorations */}
        <div className="absolute left-6 top-6 h-5 w-5 border-l-2 border-t-2 border-teal-300/20 group-hover:border-teal-300/50 transition-all duration-500 sm:left-8 sm:top-8 sm:h-6 sm:w-6 lg:left-10 lg:top-10" />
        <div className="absolute right-6 top-6 h-5 w-5 border-r-2 border-t-2 border-teal-300/20 group-hover:border-teal-300/50 transition-all duration-500 sm:right-8 sm:top-8 sm:h-6 sm:w-6 lg:right-10 lg:top-10" />
        <div className="absolute bottom-6 left-6 h-5 w-5 border-b-2 border-l-2 border-teal-300/20 group-hover:border-teal-300/50 transition-all duration-500 sm:bottom-8 sm:left-8 sm:h-6 sm:w-6 lg:bottom-10 lg:left-10" />
        <div className="absolute bottom-6 right-6 h-5 w-5 border-b-2 border-r-2 border-teal-300/20 group-hover:border-teal-300/50 transition-all duration-500 sm:bottom-8 sm:right-8 sm:h-6 sm:w-6 lg:bottom-10 lg:right-10" />

        {/* Image with Rotation and Scale */}
        <motion.div
          className="relative z-10 w-[80%] sm:w-[75%] lg:w-[85%]"
          initial={{
            rotate: -3,
            scale: 0.85,
            opacity: 0,
          }}
          whileInView={{
            rotate: 0,
            scale: 1,
            opacity: 1,
          }}
          whileHover={{
            rotate: -2,
            scale: 1.03,
            transition: { duration: 0.4 },
          }}
          transition={{
            delay: 0.6,
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          viewport={{ once: true }}
        >
          {/* Image Shadow */}
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-teal-500/20 to-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Main Image Container */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 shadow-2xl shadow-black/50 group-hover:border-white/20 transition-all duration-500">
            <Image
              src={project.image}
              alt={`${project.title} application interface`}
              fill
              priority={index === 0}
              sizes="(max-width: 640px) 80vw, (max-width: 768px) 75vw, (max-width: 1024px) 45vw, 35vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              quality={95}
            />

            {/* Image Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Project Type Badge */}
            <div className="absolute top-3 right-3 rounded-full border border-white/20 bg-black/50 backdrop-blur-md px-3 py-1 text-[10px] font-medium text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
              {project.category}
            </div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute right-10 top-10 h-2 w-2 rounded-full bg-teal-400/60 sm:right-12 sm:top-12 lg:right-14 lg:top-14"
          animate={{
            y: [-5, 5, -5],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 h-3 w-3 rounded-full bg-blue-400/50 sm:bottom-12 sm:left-12 lg:bottom-14 lg:left-14"
          animate={{
            y: [5, -5, 5],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-20 h-1.5 w-1.5 rounded-full bg-purple-400/40 hidden lg:block"
          animate={{
            x: [-3, 3, -3],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative flex flex-1 flex-col justify-center p-6 sm:p-8 lg:w-[45%] lg:p-12">
        {/* Index & Category */}
        <div className="flex items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="flex items-center gap-3"
          >
            <span className="rounded-xl bg-gradient-to-br from-teal-400/20 to-teal-500/10 border border-teal-300/20 px-3 py-1.5 text-xs font-bold tracking-wider text-teal-300 backdrop-blur-sm">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="h-px w-6 bg-teal-300/20" />
          </motion.div>

          <span className="hidden text-xs font-medium tracking-[0.2em] uppercase text-slate-500 lg:block">
            {project.category}
          </span>
        </div>

        {/* Title with Gradient */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-6 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-teal-200 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500"
        >
          {project.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-4 text-sm leading-7 text-slate-400 sm:text-base lg:text-[15px] group-hover:text-slate-300 transition-colors duration-500"
        >
          {project.description}
        </motion.p>

        {/* Features with Icons */}
        <ul className="mt-6 space-y-3">
          {project.features.map((feature, i) => (
            <motion.li
              key={feature}
              custom={i}
              variants={featureVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-start gap-3 text-sm text-slate-300 group-hover:text-slate-200 transition-colors duration-300"
            >
              <span className="mt-1.5 relative flex-shrink-0">
                <span className="block h-1.5 w-1.5 rounded-full bg-teal-400 shadow-lg shadow-teal-400/50 group-hover:scale-125 transition-transform duration-300" />
                <span className="absolute inset-0 h-1.5 w-1.5 rounded-full bg-teal-400 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </span>
              <span className="flex-1">{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* Technologies with Colorful Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-6 flex flex-wrap gap-2"
        >
          {project.technologies.map((technology, idx) => {
            const colors = [
              "hover:border-teal-300/30 hover:bg-teal-300/10 hover:text-teal-300",
              "hover:border-blue-300/30 hover:bg-blue-300/10 hover:text-blue-300",
              "hover:border-purple-300/30 hover:bg-purple-300/10 hover:text-purple-300",
              "hover:border-rose-300/30 hover:bg-rose-300/10 hover:text-rose-300",
            ];

            return (
              <motion.span
                key={technology}
                whileHover={{ scale: 1.05, y: -2 }}
                className={`cursor-default rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-400 backdrop-blur-sm transition-all duration-300 ${colors[idx % colors.length]}`}
              >
                {technology}
              </motion.span>
            );
          })}
        </motion.div>

        {/* Buttons with Enhanced Design */}
        {(project.liveUrl || project.githubUrl) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {project.liveUrl && (
              <ButtonLink
                href={project.liveUrl}
                className="group/btn relative overflow-hidden bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-white border-0 shadow-lg shadow-teal-500/20 hover:shadow-xl hover:shadow-teal-500/40 transition-all duration-500"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Live Demo
                  <motion.svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </motion.svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
              </ButtonLink>
            )}

            {project.githubUrl && (
              <ButtonLink
                href={project.githubUrl}
                variant="secondary"
                className="group/btn relative overflow-hidden border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-500"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Code
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
              </ButtonLink>
            )}
          </motion.div>
        )}

        {/* Decorative Background Elements */}
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-teal-500/5 blur-3xl group-hover:bg-teal-500/10 transition-colors duration-500 pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-blue-500/5 blur-3xl group-hover:bg-blue-500/10 transition-colors duration-500 pointer-events-none" />
      </div>

      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-300/0 to-transparent group-hover:via-teal-300/50 transition-all duration-500" />
    </motion.article>
  );
}
