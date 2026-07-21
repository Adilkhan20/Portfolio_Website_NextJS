"use client";

import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 sm:py-24 lg:py-32"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2394EAD4' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 lg:mb-20"
        >
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-teal-300/10 px-4 py-1.5 backdrop-blur-sm mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
            <span className="text-xs font-semibold text-teal-300 tracking-wider uppercase">
              Services
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            How I Can{" "}
            <span className="bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent">
              Help Your Business
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-6 text-base sm:text-lg leading-8 text-slate-400 max-w-2xl"
          >
            From professional websites to complete web applications, I build
            solutions focused on usability, performance, and maintainability
            that drive real business results.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm hover:border-teal-300/30 transition-all duration-500"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card Pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(94,234,212,0.3) 1px, transparent 0)`,
                    backgroundSize: "30px 30px",
                  }}
                />
              </div>

              <div className="relative p-6 sm:p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-teal-300 tracking-wider opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                      {service.number}
                    </span>
                    <div className="h-px w-8 bg-teal-300/30 group-hover:w-12 transition-all duration-300" />
                  </div>

                  {/* Service Icon */}
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 size-12 rounded-xl bg-gradient-to-br from-teal-400/10 to-blue-400/10 border border-white/10 flex items-center justify-center group-hover:border-teal-300/30 group-hover:from-teal-400/20 group-hover:to-blue-400/20 transition-all duration-300"
                  >
                    <svg
                      className="w-6 h-6 text-teal-300 transform -rotate-45"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-teal-300 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-slate-400 group-hover:text-slate-300 transition-colors duration-300 min-h-[80px]">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + idx * 0.1, duration: 0.3 }}
                      className="flex items-start gap-3 text-sm text-slate-300 group-hover:text-slate-200 transition-colors duration-300"
                    >
                      <span className="mt-1.5 flex-shrink-0">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-teal-300 shadow-lg shadow-teal-300/50 group-hover:scale-125 transition-transform duration-300" />
                      </span>
                      <span className="flex-1">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Bottom Decorative Line */}
                <div className="mt-8 pt-6 border-t border-white/5 group-hover:border-teal-300/20 transition-colors duration-300">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 group-hover:text-slate-400 transition-colors duration-300">
                      Learn more
                    </span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-teal-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <p className="text-sm text-slate-400">Need a custom solution?</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-300 hover:text-teal-200 transition-colors duration-300"
            >
              Let's discuss your project
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
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
